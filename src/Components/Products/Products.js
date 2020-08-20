import React, { useState, useEffect } from "react";
import apiAxios from "../../httpClient/borrowApiInstance";
import Header from "../../Common/Headers/Header";
// reactstrap components
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";

import Product from "./Product/Product";
import styles from "./styles.module.css";

function Products(props) {
  const [products, SetProducts] = useState(() => []);
  const [page] = useState(() => 1);
  const [modalVisible, setModalVisible] = useState(() => false);
  const [loading, setLoading] = useState(() => false);

  useEffect(() => {
    apiAxios.get("products").then(
      (response) => {
        console.log(response.data);
        SetProducts(response.data);
      },
      (errors) => {
        console.error(errors);
      }
    );
  }, [page]);

  const productMarkup = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  const addProductHandler = () => {
    console.log("added");
    setModalVisible((prev) => !prev);
    notificationHandler("success", "Downloaded Successfully");
  };
  const notificationHandler = (type, description) => {
    notification[type]({
      message: "Open End Export",
      description: description,
      placement: "topRight",
    });
  };
  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalOk = () => {
    setModalVisible(false);
  };
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
                    <th scope="col">Brand</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock Availability</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 1 ? productMarkup : "No Data Available"}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );

  const productModal = () => {
    return (
      <Modal
        visible={modalVisible}
        centered
        title="Product Form"
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width="50%"
        bodyStyle={{
          padding: "30px",
        }}
        footer={[
          <Button key="back" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleModalOk}
          >
            Submit
          </Button>,
        ]}
      >
        {"content goes here"}
      </Modal>
    );
  };

  return (
    <>
      <Header />
      {/* Page content */}
      {products.length > 1 ? productTable : <h2>No Products available</h2>}
      {productModal()}
    </>
  );
}

export default Products;
