import React, {useContext} from "react";
import {Link} from "react-router-dom";
import FetchCatalogs from "../data/FetchCatalogs";
import Login from "./Login";
import Registration from "./Registration";
import AuthContext from "../context/AuthContext";
import Logout from "./Logout";

const Navigation = () => {
    const catalogs = FetchCatalogs()
    const {user} = useContext(AuthContext)

    return (
        <div className={'menu-container'}>
            <nav>
                <ul>
                    <div className={'menu'}>
                        <a>
                            <Link to="/">Главная</Link>
                        </a>

                        {catalogs.map((catalog) =>
                            <a>
                                <Link to={`/${catalog.slug_catalog}`} key={catalog.id}> {catalog.catalog} </Link>
                            </a>)
                        }

                        {user ? <Logout/> : <a> <Login/> / <Registration/> </a>}

                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;