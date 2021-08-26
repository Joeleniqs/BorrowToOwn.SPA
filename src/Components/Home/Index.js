import React, { useEffect } from "react";
import { Carousel } from "antd";
import FilterSideBar from "../../Common/Sidebar/FilterSidebar/FilterSideBar";
import styles from "./styles.module.css";
import inlineStyle from "./styles";
import carousel1 from "../../assets/img/brand/carousel2.jpeg";
import Products from "./Products/Products";
import Container from "reactstrap/lib/Container";
import BackgroundImg from "./../../assets/images/elect.png";
import secBack from "./../../assets/images/ecom.jpg";
import PageWrapper from "../HOC/PageWrapper";

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
        <PageWrapper>
          <div className={styles.contentArea}>
            <Carousel autoplay>
              <div>
                {/* <h3 style={inlineStyle.contentStyle}>1</h3> */}
                <div className={styles.home}>
                  <div className={styles.imgContainer}>
                    <img className={styles.picSlide} src={BackgroundImg} />
                  </div>
                  <div className={styles.content}>
                    <h1>borrow to own</h1>
                    <h3>Everything On A Payment Plan</h3>
                    <button>about us</button>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.home}>
                  <div className={styles.imgContainer}>
                    <img className={styles.picSlide} src={secBack} />
                  </div>
                  <div className={styles.content}>
                    <h1>borrow to own</h1>
                    <h3>Everything On A Payment Plan</h3>
                    <button>about us</button>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.home}>
                  <div className={styles.imgContainer}>
                    <img className={styles.picSlide} src={BackgroundImg} />
                  </div>
                  <div className={styles.content}>
                    <h1>borrow to own</h1>
                    <h3>Everything On A Payment Plan</h3>
                    <button>about us</button>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.home}>
                  <div className={styles.imgContainer}>
                    <img className={styles.picSlide} src={BackgroundImg} />
                  </div>
                  <div className={styles.content}>
                    <h1>borrow to own</h1>
                    <h3>Everything On A Payment Plan</h3>
                    <button>about us</button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <Products />
        </PageWrapper>
      </>
    );
  };
  return homePageRender();
};
export default Homepage;
