import React, { useState, useEffect } from "react";
import { productMock } from "./productMock";
import Styles from "./styles.module.css";
import { StarFilled } from "@ant-design/icons";
import PageWrapper from "../HOC/PageWrapper";

const ProductDetail = (props) => {
  console.log(props);
  const [picIndex, setPicIndex] = useState(0);
  const [item, setItem] = useState(productMock);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getc();
  }, []);
  useEffect(() => {
    savecart();
  }, [cart]);

  const addToCart = () => {
    setCart([...cart, item]);
  };
  const savecart = () => {
    localStorage.setItem("BTOwnCart", JSON.stringify(cart));
  };
  const getc = () => {
    let nnn = JSON.parse(localStorage.getItem("BTOwnCart"))
      ? JSON.parse(localStorage.getItem("BTOwnCart"))
      : [];
    setCart(nnn);
  };
  return (
    <PageWrapper>
      <section>
        <div className={Styles.main}>
          <div className={Styles.container}>
            <div className={Styles.imgContainer}>
              <img
                src={productMock.productImages[picIndex].imageUrl}
                alt="image test"
              />
              ;
              <div className={Styles.divFlex}>
                <div className={Styles.box} onClick={() => setPicIndex(2)}>
                  <img
                    src={productMock.productImages[2].imageUrl}
                    alt="image test"
                  />
                </div>
                <div className={Styles.box} onClick={() => setPicIndex(1)}>
                  <img
                    src={productMock.productImages[1].imageUrl}
                    alt="image test"
                  />
                </div>
                <div className={Styles.box} onClick={() => setPicIndex(0)}>
                  <img
                    src={productMock.productImages[0].imageUrl}
                    alt="image test"
                  />
                </div>
              </div>
            </div>
            <div className={Styles.productDetail}>
              <h1 className={Styles.name}>{productMock.name}</h1>
              <h3>Brand: {productMock.model}</h3>
              <div className={Styles.flex2}>
                <div>
                  <StarFilled className={Styles.smallBox} />
                </div>
                <div>
                  <StarFilled className={Styles.smallBox} />
                </div>
                <div>
                  <StarFilled className={Styles.smallBox} />
                </div>
                <div>
                  <StarFilled className={Styles.smallBox} />
                </div>
                <div>
                  <StarFilled className={Styles.smallBox} />
                </div>
              </div>
              <div className={Styles.buttomBorder}></div>
              <h2>#{productMock.actualPrice}</h2>
              <h4>
                AVAILABILITY: <span>IN STOCK</span>
              </h4>
              <div className={Styles.btnDiv}>
                <button onClick={addToCart} className={Styles.addToCart}>
                  add to cart
                </button>
                <button className={Styles.buyNow}>buy now</button>
              </div>
              <div style={{ margin: "2.5rem 0" }}>
                <h3>Product Description:</h3>
                <p>{productMock.description}</p>
              </div>
              <div>
                <h3>PAYMENT PLAN:</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium, optio.
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.divFlex}>
            <div className={Styles.bigBox}>
              <img
                src={productMock.productImages[2].imageUrl}
                alt="image test"
              />
            </div>
            <div className={Styles.bigBox}>
              <img
                src={productMock.productImages[1].imageUrl}
                alt="image test"
              />
            </div>
            <div className={Styles.bigBox}>
              <img
                src={productMock.productImages[0].imageUrl}
                alt="image test"
              />
            </div>
            <div className={Styles.bigBox}>
              <img
                src={productMock.productImages[2].imageUrl}
                alt="image test"
              />
            </div>
            <div className={Styles.bigBox}>
              <img
                src={productMock.productImages[1].imageUrl}
                alt="image test"
              />
            </div>
          </div>
        </div>
        <aside className={Styles.semi}>
          <h2>DELIVERY & RETURN</h2>
          <h4>Enter your home address</h4>
          <form>
            <label for="Location" name="location">
              Abuja:
            </label>
            <input
              type="text"
              name="Location"
              id="Location"
              placeholder="City"
            />
          </form>
        </aside>
      </section>
    </PageWrapper>
  );
};

export default ProductDetail;
