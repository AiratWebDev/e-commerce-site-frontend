import React from 'react';
import Button from "./UI/Button";

const Product = (ProductProps) => {
    return (
        <div>
            <div>
                <div>
                    <img className={'good-img'} src={`${ProductProps.image}`} alt="" width={'200px'}/>
                </div>
                <p>{ProductProps.title}</p>
                <b><p>{ProductProps.price}</p></b>
                <Button className={'buy-btn'} value={'Купить'}/>
                <p>Количество товара: {ProductProps.quantity}</p>
            </div>
        </div>
    );
};

export default Product;