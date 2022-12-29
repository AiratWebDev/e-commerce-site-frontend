import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Router from "./components/Router";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <Navigation/>
                <div className={'content'}>
                    <Router/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;

