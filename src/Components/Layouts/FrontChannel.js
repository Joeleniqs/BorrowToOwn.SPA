import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "../../routes";
import FrontChannelNavbar from "../../Common/Navbars/FrontChannelNavbar";
import Footer from "../../Common/Footers/Footer";
import styles from "./styles.module.css";
import ProductDetail from "../ProductDetail/productDetail";
import Product from "../Products/Product/Product";
import { FrontChannelNavBarProvider } from "../../Contexts/FrontChannelHeaderContext";

function FrontChannel(props) {
  const isRegisterPage = props.location.pathname === "/index/register";
  const getRoutes = (routes) => {
    console.log(routes);
    let finalRoutes = routes.map((prop, key) => {
      if (prop.layout === "/index") {
        console.log(prop);
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
    return finalRoutes;
  };

  return (
    <div
      className="main-content"
      style={
        isRegisterPage
          ? {
              backgroundColor: "#192A4D",
              bottom: "0px",
              width: "100%",
              height: "80rem",
            }
          : {}
      }
    >
      <FrontChannelNavBarProvider {...props}>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              {/* <Redirect from="*" to="/index" /> */}
            </Switch>
          </Row>
        </Container>
        <Footer />
      </FrontChannelNavBarProvider>
    </div>
  );
}

export default FrontChannel;
