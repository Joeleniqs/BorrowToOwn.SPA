import React, { useEffect } from "react";
import { Carousel } from "antd";
import FilterSideBar from "../../Common/Sidebar/FilterSidebar/FilterSideBar";
import styles from "./styles.module.css";
import inlineStyle  from "./styles";
import carousel1 from "../../assets/img/brand/carousel2.jpeg";
import Products from "./Products/Products"

const Homepage = () => {
  useEffect(() => {
    console.log("in homepage");
    //check url if it contains search and then render accordingly , else render homepage
  });
  const searchRender = () => {
    return (
      <>
        <FilterSideBar />
        <div className="main-content">
          <div className={styles.contentArea}></div>
          <h2>content area</h2>
        </div>
      </>
    );
  };
  // const contentStyle = {
  //   height: "20rem",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };
  const homePageRender = () => {
    return (
      <>
        <div className={styles.contentArea}>
          <Carousel autoplay>
            <div>
              <h3 style={inlineStyle.contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={inlineStyle.contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={inlineStyle.contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={inlineStyle.contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        <Products/>
      </>
    );
  };
  return homePageRender();
};
export default Homepage;
