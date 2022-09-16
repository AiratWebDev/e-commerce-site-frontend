import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import FetchCatalogs from "../data/FetchCatalogs";

const Navigation = () => {
    const catalogs = FetchCatalogs()

    const CatalogName = catalogs.map(catalog => catalog.catalog)
    const CatalogSlug = catalogs.map(catalog => catalog.slug_catalog)

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link to={`/${CatalogSlug[0]}`}>{CatalogName[0]}</Link>
                    </li>
                    <li>
                        <Link to={`/${CatalogSlug[1]}`}>{CatalogName[1]}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;