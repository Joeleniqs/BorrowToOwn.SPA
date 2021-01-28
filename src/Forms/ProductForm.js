import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  message,
  Select,
  Upload,
  Descriptions,
  Badge,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import apiAxios from "../httpClient/borrowApiInstance";
import { PRODUCT_STATE, MODAL_TYPES } from "../utils/enums";
import { notificationHandler } from "../utils/notificationHandler";
import api from "../httpClient/api";
import { amountFormatter } from "../utils/amountFormatter";
import { useCategory, useCategories } from "../httpClient/hooks/useCategories";

function ProductForm(props) {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState(() => []);
  const [subCategories, setSubCategories] = useState(() => []);
  const [brands, setBrands] = useState(() => []);
  const [paymentPlans, setPaymentPlans] = useState(() => []);
  const [formComplete, setFormComplete] = useState(() => false);
  const [selectedCategory, setSelectedCategory] = useState(() => -1);
  const [coverImage, setCoverImage] = useState(() => []);
  const [altImages, setAltImage] = useState(() => []);
  useEffect(() => {
    getCategories();
    getPaymentPlans();
    getBrands();
  }, []);

  const getCategories = async () => {
    const { data } = await api.get("categories", apiAxios);
    setCategories(data);
  };
  const getPaymentPlans = async () => {
    const { data } = await api.get("paymentPlans", apiAxios);
    setPaymentPlans(data);
  };
  const getBrands = async () => {
    const { data } = await apiAxios.get("brands", apiAxios);
    setBrands(data);
  };
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
      min: "${label} cannot be less than ${min}",
    },
    string: {
      min: "${label} must have at least ${min} characters",
    },
  };
  const onFinish = (values) => {
    const data = new FormData();
    data.set("name", values.product.name);
    data.set("Quantity", values.product.quantity);
    data.set("ActualPrice", values.product.actualPrice);
    data.set("Model", values.product.model);
    data.set("Description", values.product.description);
    data.set("ProductState", values.product.productState);
    data.set("CoverImage", values.product.coverImage.file);
    data.set("CategoryId", values.product.categoryId);
    data.set("SubCategoryId", values.product.subCategoryId);
    data.set("AssociatedPaymentPlans", values.product.allowedPaymentPlans);
    altImages.forEach((file) => {
      data.append("AlternateProductImages", file);
    });
    data.set("BrandId", values.product.brandId);

    saveProduct(data, "products");
    //clear form
    form.resetFields();
    //close productForm modal
    props.closeModal(false);
  };
  const saveProduct = async (data, url) => {
    await apiAxios.post(url, data).then(
      (response) => {
        props.notificationHandler("Success", "Product  Added Successfully");
      },
      (errors) => {
        message.error(
          "Oops! Unable to add products at this time , contact support."
        );
      }
    );
  };
  const fieldChangeHandler = (changedField, allField) => {
    const touchIncomplete = allField.some((element) => !element.touched);
    const anyError = allField.some((element) => element.errors.length > 0);
    !touchIncomplete && !anyError
      ? setFormComplete(true)
      : setFormComplete(false);
  };
  const { Option } = Select;
  const getSubCategory = async (id) => {
    console.log("getting cat");
    const { data } = await api.get(
      `categories/${id}?includeSubCategory=true`,
      apiAxios
    );
    console.log(data);
    return data;
  };
  const onCategoryChange = async (value) => {
    const data = await getSubCategory(value);
    setSubCategories(data.subCategories);
    setSelectedCategory(value);
  };
  const coverImageUploadProps = {
    onRemove: (file) => {
      setCoverImage((prev) => {
        const index = prev.indexOf(file);
        const newCoverImage = prev.slice();
        newCoverImage.splice(index, 1);
        return newCoverImage;
      });
    },
    beforeUpload: (file) => {
      console.log(file);

      setCoverImage((prev) => [...prev, file]);
      return false;
    },
    fileList: coverImage,
  };
  const altImageUploadProps = {
    onRemove: (file) => {
      setAltImage((prev) => {
        const index = prev.indexOf(file);
        const newAltImage = prev.slice();
        newAltImage.splice(index, 1);
        return newAltImage;
      });
    },
    beforeUpload: (file) => {
      setAltImage((prev) => {
        const previousFiles = prev.map((file) => file);
        console.log(previousFiles);
        const newFiles = [...previousFiles, file];
        console.log(newFiles);
        return newFiles;
      });
      return false;
    },
    fileList: altImages,
  };
  const addProductMarkup = () => {
    return (
      <>
        <Form.Item
          name={["product", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["product", "model"]} label="Model">
          <Input />
        </Form.Item>

        <Form.Item
          name={["product", "quantity"]}
          label="Quantity"
          rules={[
            {
              type: "number",
              min: 1,
              max: 100000,
              required: true,
            },
          ]}
        >
          <InputNumber style={{ width: 250 }} />
        </Form.Item>

        <Form.Item
          name={["product", "actualPrice"]}
          label="Price"
          rules={[
            {
              type: "number",
              required: true,
              min: 5,
            },
          ]}
        >
          <InputNumber
            style={{ width: 250 }}
            formatter={(value) =>
              `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\₦\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Form.Item
          name={["product", "categoryId"]}
          rules={[{ required: true }]}
          label="Category"
        >
          <Select
            style={{ width: 250 }}
            onChange={onCategoryChange}
            placeholder="Select category"
          >
            {categories.map((cat) => {
              return (
                <Option value={cat.id} key={cat.id}>
                  {cat.categoryName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={["product", "subCategoryId"]}
          label="Sub Category"
          rules={[{ required: true }]}
        >
          <Select
            style={{ width: 250 }}
            placeholder="Select subcategory"
            disabled={selectedCategory < 1}
          >
            {selectedCategory > 0 &&
              subCategories.map((subCategory) => {
                return (
                  <Option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item
          name={["product", "productState"]}
          label="Product State"
          rules={[{ required: true }]}
        >
          <Select style={{ width: 250 }} placeholder="Select product state">
            {PRODUCT_STATE.map((data) => {
              return (
                <Option key={data.value} value={data.value}>
                  {data.state}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name={["product", "description"]}
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name={["product", "allowedPaymentPlans"]}
          label="Allowed Plans"
          rules={[{ required: true }]}
        >
          <Select
            disabled={paymentPlans.length < 1}
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select one or more payment plan"
            // onChange={handleChange}
          >
            {paymentPlans.map((plan) => {
              return (
                <Option key={plan.id} value={plan.id}>
                  {plan.planName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name={["product", "brandId"]}
          label="Brands"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Select a brand"
            optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {brands.map((brand) => {
              return (
                <Option value={brand.id} key={brand.id}>
                  {brand.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name={["product", "coverImage"]}
          label="Cover Image"
          rules={[{ required: true }]}
        >
          <Upload {...coverImageUploadProps}>
            {coverImage.length < 1 && (
              <Button>
                <UploadOutlined /> Upload
              </Button>
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          name={["product", "AlternateProductImages"]}
          label="Alternate Images"
          rules={[{ required: true }]}
        >
          <Upload {...altImageUploadProps}>
            {altImages.length < 3 && (
              <Button>
                <UploadOutlined /> Upload
              </Button>
            )}
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Button type="primary" htmlType="submit" disabled={!formComplete}>
            Submit
          </Button>
        </Form.Item>
      </>
    );
  };
  const updateProductMarkup = () => {
    return <h2>Update coming soon</h2>;
  };
  const viewProductMarkup = () => {
    const { product, subCategories } = props;
    const brand = brands.find((brand) => brand.id == product.brandId);
    const category = categories.find((cat) => cat.id == product.categoryId);
    const subCategory = subCategories.find(
      (sub) => sub.id == product.subCategoryId
    );
    return (
      <>
        <Descriptions title="Product Details" layout="vertical" bordered>
          <Descriptions.Item label="Basic Data" span={3}>
            <strong>Name </strong>: {`    ${product.name}`}
            <br /> <br />
            <strong>Category</strong> :{" "}
            {`    ${category && category.categoryName}`}
            <br /> <br />
            <strong>SubCategory</strong> : {subCategory && subCategory.name}
            <br /> <br />
          </Descriptions.Item>
          <Descriptions.Item label="Model">{product.model}</Descriptions.Item>
          <Descriptions.Item label="Price">
            {amountFormatter(product.actualPrice)}
          </Descriptions.Item>
          <Descriptions.Item label="Brand">
            {brand && brand.name}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={2}>
            {product.description}
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={1}>
            <Badge
              status={product.isActive ? "processing" : "error"}
              text={product.isActive ? "Active" : "Not Active"}
              color={product.isActive ? "green" : "red"}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Price">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            $60.00
          </Descriptions.Item>
          <Descriptions.Item label="Payment Plans Info">
            {/* Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Last: 10 GB
            <br />
            Created by: 3
            <br />
            Region: East China 1<br /> */}
          </Descriptions.Item>
        </Descriptions>
        ,
      </>
    );
  };
  const renderProductForm = (modalType) => {
    switch (modalType) {
      case MODAL_TYPES.ADD:
        return addProductMarkup();
      case MODAL_TYPES.UPDATE:
        return updateProductMarkup();
      default:
        return viewProductMarkup();
    }
  };
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        onFieldsChange={fieldChangeHandler}
        form={form}
      >
        {renderProductForm(props.type)}
      </Form>
    </>
  );
}

export default ProductForm;
