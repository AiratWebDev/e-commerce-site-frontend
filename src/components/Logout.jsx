import React, {useContext} from 'react';
import AuthContext from "../context/AuthContext";

const Logout = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <>
            <a href="/cabinet">Личный кабинет, {user.username}</a>
            <a href='' onClick={logoutUser}>Выйти</a>
        </>
    );
};

export default Logout;