import React, { useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Sidebar from "../../Common/Sidebar/Sidebar";
import logoImg from "../../assets/img/brand/ToOwnLogo.jpeg";
import AdminFooter from "../../Common/Footers/AdminFooter";
import AdminNavbar from "../../Common/Navbars/AdminNavbar";
import { Container } from "reactstrap";
import routes from "../../routes";

function Admin(props) {
  const mainContainerRef = useRef();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContainerRef.current.scrollTop = 0;
  });

  const getRoutes = (routes) => {
    let finalRoutes = routes.map((prop, key) => {
      if (prop.layout === "/admin") {
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
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Dashboard";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: logoImg,
          imgAlt: "borrow-to - own logo",
        }}
      />
      <div className="main-content" ref={mainContainerRef}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default Admin;
