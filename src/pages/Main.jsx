import React from "react";
import Slider from "../components/Slider";
import Product from "../components/Product";
import FetchProducts from "../data/FetchProducts";

const Main = () => {
    const products = FetchProducts()

    return (
        <>
            <Slider/>
            <p>Текст со страницы Main</p>
            <div className={'products-container'}>
                {products.map((product) =>
                    <div className={'Product'}>
                        <Product key={product.id}
                                 title={product.good}
                                 price={product.price}
                                 image={product.images}
                                 quantity={product.quantity}
                        />
                    </div>)}
            </div>
        </>
    )
}

export default Main;