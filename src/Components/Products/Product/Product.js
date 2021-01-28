import React from "react";
import { amountFormatter } from "../../../utils/amountFormatter";
import apiAxios from "../../../httpClient/borrowApiInstance";

// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  UncontrolledTooltip,
} from "reactstrap";
import { notificationHandler } from "../../../utils/notificationHandler";

const Product = (props) => {
  const { product } = props;

  return (
    <tr>
      <th scope="row">
        <Media className="align-items-center">
          <a
            className="avatar rounded-circle mr-3"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              src={require("../../../assets/img/theme/bootstrap.jpg")}
            />
          </a>
          <Media>
            <span className="mb-0 text-sm">{product.name}</span>
          </Media>
        </Media>
      </th>
      <td>$25,000</td>
      <td>
        <Badge color="" className="badge-dot mr-4">
          <i className="bg-warning" />
          pending
        </Badge>
      </td>
      <td> {amountFormatter(product.actualPrice)} </td>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip731399078"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={require("../../../assets/img/theme/team-1-800x800.jpg")}
            />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip731399078">
            Ryan Tompson
          </UncontrolledTooltip>
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip491083084"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={require("../../../assets/img/theme/team-2-800x800.jpg")}
            />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip491083084">
            Romina Hadid
          </UncontrolledTooltip>
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip528540780"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={require("../../../assets/img/theme/team-3-800x800.jpg")}
            />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip528540780">
            Alexander Smith
          </UncontrolledTooltip>
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip237898869"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={require("../../../assets/img/theme/team-4-800x800.jpg")}
            />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip237898869">
            Jessica Doe
          </UncontrolledTooltip>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span className="mr-2">60%</span>
          <div>
            <Progress max="100" value="60" barClassName="bg-warning" />
          </div>
        </div>
      </td>
      <td className="text-left">
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem onClick={(e) => props.viewHandler(e, product)}>
              View
            </DropdownItem>
            <DropdownItem onClick={(e) => props.updateHandler(e, product)}>
              Edit
            </DropdownItem>
            <DropdownItem onClick={(e) => props.viewHandler(e, product)}>
              Set InActive
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  );
};

export default Product;
