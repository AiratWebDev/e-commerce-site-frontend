import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from '../pages/About'
import Main from "../pages/Main";
import Smartphones from "../pages/Smartphones";
import TVs from "../pages/TVs";
import Feedback from "../pages/Feedback";


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/about'} element={<About/>} />
            <Route path={'/smartfony'} element={<Smartphones/>} />
            <Route path={'/televizory'} element={<TVs/>} />
            <Route path={'/obratnaya-svyaz'} element={<Feedback/>} />
        </Routes>
    );
};

export default Router;