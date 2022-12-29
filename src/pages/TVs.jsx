import React from 'react';
import FetchProducts from "../data/FetchProducts";
import Product from "../components/Product";

const TVs = () => {
    const products = FetchProducts()
    const tvs = products.filter((tv) => tv.parent_catalog === 2)

    return (
        <div>
            <h1>Телевизоры</h1>
            {tvs.map((tv) =>
                <div style={{display: 'inline-block', margin: '30px'}}>
                    <Product key={tv.id}
                             title={tv.good}
                             price={tv.price}
                             image={tv.images}
                             quantity={tv.quantity}
                    />
                </div>)}
        </div>
    );
};

export default TVs;