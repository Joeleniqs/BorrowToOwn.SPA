import React from "react";
import Styles from "./pageWrapper.module.css";
const PageWrapper = (props) => (
  <div className={Styles.bdy}>{props.children}</div>
);

export default PageWrapper;
