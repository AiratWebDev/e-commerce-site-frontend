import React from "react";
import {Link} from "react-router-dom";
import FetchCatalogs from "../data/FetchCatalogs";

const Navigation = () => {
    const catalogs = FetchCatalogs()

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
                        <a>
                            <Link to="">Войти</Link>
                        </a>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;