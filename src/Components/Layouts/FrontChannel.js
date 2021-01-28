import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "../../routes";
import FrontChannelNavbar from "../../Common/Navbars/FrontChannelNavbar";
import Footer from "../../Common/Footers/Footer";
import styles from "./styles.module.css";

function FrontChannel(props) {
  const [header, setHeader] = useState(null);
  const isRegisterPage = props.location.pathname === "/index/register";
  useEffect(() => {
    console.log("mounting");
    setHeader(
      isRegisterPage ? renderRegistrationHeader() : renderIndexHeader()
    );
  }, [props.location.pathname]);
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
  return (
    <>
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
        <FrontChannelNavbar />
        {header}
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
      </div>
    </>
  );
}

export default FrontChannel;
