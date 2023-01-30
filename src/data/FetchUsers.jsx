import React, {useContext, useEffect, useState} from 'react';
import Axios from "axios";
import AuthContext from "../context/AuthContext";

const FetchUsers = () => {
    const {user} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})

    const url = 'http://127.0.0.1:8000/api/user/get_info/'

    const getInfo = async (event) => {
        const response = await Axios.get(url, {
            params: {
                email: user.email,
                name: user.name
            }
        })
            .then()
            .catch((error) => console.log('Ошибка: ' + error.response.data))

        setUserInfo(response.data[0])
    }

    useEffect(() => {
        setUserInfo([])
        getInfo()
    }, [])

    return userInfo
};

export default FetchUsers;