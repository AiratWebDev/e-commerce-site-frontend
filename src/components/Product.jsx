import React, {useEffect, useState} from 'react';

const Product = (ProductProps) => {
    return (
        <div>
            <div>
                <img src={`${ProductProps.image}`} alt="" width={'200px'}/>
                <p>{ProductProps.title}</p>
                <b><p>{ProductProps.price}</p></b>
                <button onClick={''}>Купить</button>
            </div>
        </div>
    );
};

export default Product;