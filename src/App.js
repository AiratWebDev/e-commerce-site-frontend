import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './pages/About'
import Main from './pages/Main'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/about'} element={<About/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;

