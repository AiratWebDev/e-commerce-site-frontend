import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from '../pages/About'
import Main from "../pages/Main";
import Smartphones from "../pages/Smartphones";
import TVs from "../pages/TVs";
import Feedback from "../pages/Feedback";
import Cabinet from "../pages/Cabinet";
import PrivateRouter from "./PrivateRouter";
import Login from "./Login";


const Router = () => {
    return (
        <Routes>
            {/*<PrivateRouter exact path={'/cabinet'} component={<Cabinet/>} />*/}
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/smartfony'} element={<Smartphones/>}/>
            <Route path={'/televizory'} element={<TVs/>}/>
            <Route path={'/obratnaya-svyaz'} element={<Feedback/>}/>
            <Route path={'/loginpage'} element={<Login/>}/>
            <Route path={'/cabinet'} element={
                <PrivateRouter>
                    <Cabinet/>
                </PrivateRouter>
            }/>
        </Routes>

    );
};

export default Router;