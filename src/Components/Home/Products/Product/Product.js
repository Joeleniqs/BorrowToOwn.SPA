import React from "react";
import styles from "./Product.module.css";

const Product = (props) => {
    return (
        <>
        {/* single product */}
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <img className= {styles.productImg} src={require(`../../../../assets/images/${props.img}`)} alt={props.title}></img>
                <div className={styles.myBtn}>
                    add to cart
                </div>
            </div>
            <p>{props.title}</p>
            <h4>#{props.price} <span className={styles.underline}>#{props.slashed}</span></h4>
      </div>
    {/* //end of single product */}
    </>
    )
}

export default Product