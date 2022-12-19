import React, {Fragment} from 'react'
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js"

const Home = () => {

    const product = {
        name : "Blue Shirt",
        images : [{ url : "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPBEING-FAB-MEBEIN21167AC66D91B/1562784940114_1..jpg?imwidth=320&impolicy=hq"}],
        price : "₹3000",
        _id : "rghanks"
    }

  return (
    <Fragment>
       <div className="banner">
            <p>Welcome To ECOMMERCE</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
       </div>

    <div className="homeHeading">Featured Products</div>

    <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
    </div>

    </Fragment>
  )
}

export default Home