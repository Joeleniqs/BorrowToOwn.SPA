import React from "react";
import styles from "./Products.module.css";
import Product from "./Product/Product";
import "../../../assets/css/variables.module.css"

const Products = () => {
    const recentlyAdded = [
        {
          title: "UMIDIGI A7S 6.53-Inch (2GB,32GB ROM)",
          price: 39900,
          slashed: 63690,
          img: "product-1.jpg",
          id: 1,
        },
        {
          id: 2,
          title: "Lenovo Ideapad 4GBRAM/500 HDD Intel",
          price: 165400,
          slashed: 63690,
          img: "product-2.jpg",
        },
        {
          id: 3,
          title: "table",
          price: 33,
          slashed: 35,
          img: "product-8.jpeg",
        },
        {
          id: 4,
          title: "queens bed",
          price: 30,
          slashed: 34,
          img: "product-3.jpeg",
        },
        {
          id: 5,
          title: "twin panel bed",
          price: 22,
          slashed: 28,
          img: "product-4.jpeg",
        },
        {
          id: 6,
          title: "couch",
          price: 45.99,
          slashed: 52.99,
          img: "product-7.jpeg",
        },
        {
          id: 7,
          title: "dresser",
          price: 32,
          slashed: 35,
          img: "product-6.jpeg",
        },
        {
          id: 8,
          title: "fridge",
          price: 88.99,
          slashed: 92.99,
          img: "product-5.jpeg",
        },
        {
          id: 9,
          title: "UMIDIGI A7S 6.53-Inch (2GB,32GB ROM)",
          price: 39900,
          slashed: 63690,
          img: "product-1.jpg",
        },
        {
          id: 10,
          title: "Lenovo Ideapad 4GBRAM/500 HDD Intel",
          price: 165400,
          slashed: 63690,
          img: "product-2.jpg",
        }
      ];

    const mostPopular = [
      {
        id: 1,
        title: "table",
        price: 33,
        slashed: 35,
        img: "product-8.jpeg",
      },
      {
        id: 2,
        title: "fridge",
        price: 88.99,
        slashed: 92.99,
        img: "product-5.jpeg",
      },
      {
        id: 3,
        title: "UMIDIGI A7S 6.53-Inch (2GB,32GB ROM)",
        price: 39900,
        slashed: 63690,
        img: "product-1.jpg",
      },
      {
        id: 4,
        title: "Lenovo Ideapad 4GBRAM/500 HDD Intel",
        price: 165400,
        slashed: 63690,
        img: "product-2.jpg",
      }
    ]

    let rAdded = recentlyAdded.slice(0, 8)
    rAdded = rAdded.map(a => (
      <Product key={a.id} title={a.title} price={a.price} slashed={a.slashed} img={a.img} imm="product-2.jpg" />
    ))

    let mPopular = mostPopular.map(a => (
      <Product key={a.id} title={a.title} price={a.price} slashed={a.slashed} img={a.img} imm="product-2.jpg" />
    ))

    return(
        <>
          <div className={styles.products} >
            <div className={styles.productsTitle} >
              <h1>products</h1>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.productCategory}>
              <div className={styles.catTitle}>
                  <h3 className={styles.catName}> recently added </h3>
                  <div className={styles.cartUnderline} ></div>
              </div>
              <div className={styles.productCenter} >
                {rAdded}
              </div>
              <button className={styles.moreButton}>view more</button>
            </div>

            <div className={styles.productCategory}>
              <div className={styles.catTitle}>
                  <h3 className={styles.catName}> most popular </h3>
                  <div className={styles.cartUnderline} ></div>
              </div>
              <div className={styles.productCenter} >
                  {mPopular}
              </div>
              <button className={styles.moreButton}>view more</button>
            </div>
          </div>
        </>
    )
}

export default Products