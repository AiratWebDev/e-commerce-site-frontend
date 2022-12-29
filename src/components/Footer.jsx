import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={'footer'}>
                <nav>
                    <ul>
                        <a>
                            <Link to="/about">О нас</Link>
                        </a>
                        <a>
                            <Link to='/obratnaya-svyaz'>Обратная связь</Link>
                        </a>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Footer;