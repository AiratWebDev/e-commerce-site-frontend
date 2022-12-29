import React from 'react';
import FetchProducts from "../data/FetchProducts";
import Product from "../components/Product";

const Smartphones = () => {
    const products = FetchProducts()
    const phones = products.filter((phone) => phone.parent_catalog === 1)

    return (
        <div>
            <h1>Смартфоны</h1>
            {phones.map((phone) =>
                <div style={{display: 'inline-block', margin: '30px'}}>
                    <Product key={phone.id}
                             title={phone.good}
                             price={phone.price}
                             image={phone.images}
                             quantity={phone.quantity}
                     />
                </div>)}
        </div>
    );
};

export default Smartphones;