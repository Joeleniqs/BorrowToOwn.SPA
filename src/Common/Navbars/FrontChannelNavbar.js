import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import { useFrontChannelNavbarContext } from "../../Contexts/FrontChannelHeaderContext";
import useCartOperations from "../Cart/hooks/useCartOperations";

export const FrontChannelNavbar = (props) => {
  const { cart, clearCart } = useFrontChannelNavbarContext();
  const [searchField, setSearchField] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("---key down -- " + searchField);
    return "";
  };
  const handleInput = (event) => {
    setSearchField(event.target.value);
    console.dir(event.target.value);
  };
  const numberOfCartItems = () => (cart && cart.length) || 0;

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/ToOwnLogo.jpeg")}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/ToOwnLogo.jpeg")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <Form
                className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
                onSubmit={(event) => handleSearch(event)}
              >
                <FormGroup className="mb-0">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search"
                      type="text"
                      //onBlur={handleSearch}
                      onChange={(event) => handleInput(event)}
                    />
                  </InputGroup>
                </FormGroup>
              </Form>
              <NavItem>
                <NavLink className="nav-link-icon" to="/admin" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Admin</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/index/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/admin/user" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <div onClick={() => clearCart()} className="cartDiv">
                  <ShoppingCartOutlined className="cartIcon" />
                  <span className="cartAmount">{numberOfCartItems()}</span>
                </div>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FrontChannelNavbar;
