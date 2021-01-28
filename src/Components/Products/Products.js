import React, { useState } from "react";
import Header from "../../Common/Headers/Header";
// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import ProductForm from "../../Forms/ProductForm";
import Product from "./Product/Product";
import { useProducts } from "../../httpClient/hooks/useProducts";
import { useCategory } from "../../httpClient/hooks/useCategories";
import apiAxios from "../../httpClient/borrowApiInstance";
import styles from "./styles.module.css";
import { notificationHandler } from "../../utils/notificationHandler";
import { MODAL_TYPES } from "../../utils/enums";
import api from "../../httpClient/api";

function Products(props) {
  const { data: products, isLoading, isError } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState(null);
  const [page] = useState(() => 1);
  const [modalVisible, setModalVisible] = useState(() => false);
  const [loading, setLoading] = useState(() => false);
  const [productModalType, setProductModalType] = useState("");

  const setModalTypeAndChangeDisplayStatus = (type) => {
    setProductModalType(type);
    setModalVisible((prev) => !prev);
  };

  const addProductHandler = () => {
    setModalTypeAndChangeDisplayStatus(MODAL_TYPES.ADD);
  };
  const getSubCategory = async (id) => {
    const { data } = await api.get(
      `categories/${id}?includeSubCategory=true`,
      apiAxios
    );
    return data.subCategories;
  };

  const viewProductHandler = async (event, product) => {
    event.preventDefault();
    setSelectedProduct(product);
    const subCat = await getSubCategory(product.categoryId);
    setSelectedSubCategories(subCat);
    setModalTypeAndChangeDisplayStatus(MODAL_TYPES.VIEW);
  };

  const updateProductHandler = (event, product) => {
    event.preventDefault();
    setModalTypeAndChangeDisplayStatus(MODAL_TYPES.UPDATE);
  };

  const handleModalCancel = () => setModalVisible(false);

  const handleModalOk = () => setModalVisible(false);

  const productMarkup = products
    ? products.data.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            brand
            viewHandler={viewProductHandler}
            updateHandler={updateProductHandler}
          />
        );
      })
    : null;

  const productTable = (
    <>
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                {/* <Row className="mt-12"> */}
                <div className={styles.cardTitleAndHeader}>
                  <h3 className="text-white mb-0">Products</h3>
                  <AppstoreAddOutlined
                    className={styles.cardHeaderIcon}
                    size="large"
                    onClick={addProductHandler}
                  />
                </div>
                {/* </Row> */}
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Images</th>
                    <th scope="col">Stock Availability</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{products ? productMarkup : "No Data Available"}</tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
  const addProductModal = (
    <>
      <Modal
        visible={modalVisible}
        centered
        title="Add Product"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width="40%"
        bodyStyle={{
          padding: "20px",
        }}
        footer={null}
      >
        <ProductForm
          notificationHandler={notificationHandler}
          closeModal={setModalVisible}
          type={MODAL_TYPES.ADD}
        />
      </Modal>
    </>
  );
  const viewProductModal = (
    <>
      <Modal
        visible={modalVisible}
        centered
        title="View"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width="40%"
        bodyStyle={{
          padding: "20px",
        }}
        footer={null}
      >
        <ProductForm
          notificationHandler={notificationHandler}
          closeModal={setModalVisible}
          type={MODAL_TYPES.VIEW}
          product={selectedProduct}
          subCategories={selectedSubCategories}
        />
      </Modal>
    </>
  );
  const updateProductModal = (
    <>
      <Modal
        visible={modalVisible}
        centered
        title="Update Product"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width="40%"
        bodyStyle={{
          padding: "20px",
        }}
        footer={null}
      >
        <ProductForm
          notificationHandler={notificationHandler}
          closeModal={setModalVisible}
          type={MODAL_TYPES.UPDATE}
        />
      </Modal>
    </>
  );
  const productModal = () => {
    switch (productModalType) {
      case MODAL_TYPES.ADD:
        return addProductModal;
      case MODAL_TYPES.UPDATE:
        return updateProductModal;
      default:
        return viewProductModal;
    }
  };

  return (
    <>
      <Header />
      {/* Page content */}
      {isLoading ? (
        <h2>spinner</h2>
      ) : isError ? (
        <h2>No Products available</h2>
      ) : (
        <div>{productTable}</div>
      )}
      {productModal()}
    </>
  );
}

export default Products;
