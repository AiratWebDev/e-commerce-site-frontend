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
            <div>
                {products.map((product) => <div className={'Product'} style={{display: 'inline-block', margin: '30px'}}> <Product key={product.id} title={product.good} price={product.price}
                                                    image={product.images}/> </div>)}
            </div>
        </>
    )
}

export default Main;