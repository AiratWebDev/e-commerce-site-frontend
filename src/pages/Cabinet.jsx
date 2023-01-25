import React, {useContext} from 'react';
import AuthContext from "../context/AuthContext";

const Cabinet = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>Приветствуем, {user.name}</h1>
            <p>Ваша почта — {user.email}</p>
            <p>Текст со страницы личного кабинета</p>
        </div>
    );
};

export default Cabinet;