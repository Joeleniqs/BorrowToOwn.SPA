import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import FrontChannelNavbar from "../../Common/Navbars/FrontChannelNavbar";
import styles from "./styles.module.css";
import useCartOperations from "../../Common/Cart/hooks/useCartOperations";

const context = React.createContext();

const renderRegistrationHeader = () => {
  return (
    <div className="header bg-gradient-info py-7 py-lg-8">
      <Container>
        <div className="header-body text-center mb-7">
          <Row className="justify-content-center">
            <Col lg="5" md="6">
              <h1 className="text-white">Welcome!</h1>
              <p className="text-lead text-light">
                Register Now and buy anything on a payment plan !!!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-default" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </div>
  );
};

const renderIndexHeader = () => {
  return <div className={styles.indexHeader}></div>;
};

export const FrontChannelNavBarProvider = (props) => {
  const cartOperations = useCartOperations();
  const [header, setHeader] = useState(null);

  const isRegisterPage = props.location.pathname === "/index/register";

  useEffect(() => {
    console.log("mounting");
    setHeader(
      isRegisterPage ? renderRegistrationHeader() : renderIndexHeader()
    );
  }, [props.location.pathname]);
  const contextAPI = cartOperations;
  return (
    <context.Provider value={contextAPI}>
      <FrontChannelNavbar />
      {header}
      {props.children}
    </context.Provider>
  );
};

export const useFrontChannelNavbarContext = () => {
  const ctx = React.useContext(context);
  if (ctx == null) {
    throw new Error(
      "useFrontChannelNavbarProvider must be used from within a FrontChannelNavBarProvider"
    );
  }

  return ctx;
};
