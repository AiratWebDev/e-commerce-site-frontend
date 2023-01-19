import {Route, Navigate} from 'react-router-dom'
import React, {useContext} from "react";
import {Nav} from "react-bootstrap";
import AuthContext from "../context/AuthContext";


const PrivateRouter = ({children, ...rest}) => {
    const authenticated = true
    const {user} = useContext(AuthContext)

    if (user) {
        return children
    }
    return <Navigate to={'/'}/>

    // return(
    //     <Route {...rest}>{!authenticated ? <Navigate to={'/main'}/> : children}</Route>
    // )
}

export default PrivateRouter;