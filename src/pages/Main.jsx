import React, {useContext} from "react";
import Slider from "../components/Slider";
import Product from "../components/Product";
import FetchProducts from "../data/FetchProducts";
import Login from "../components/Login";
import AuthContext from "../context/AuthContext";

const Main = () => {
    const products = FetchProducts()
    const {user} = useContext(AuthContext)

    return (
        <>
            <Slider/>
            {user && <p>Текст со страницы Main для {user.username}</p>}
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