import {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import jwt_decode from "jwt-decode";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

    // const history = useNavigate()
    // тут хранятся наши токены
    let [authTokens, setAuthTokens] =
        useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    // user позволяет обратиться к username и другим параметрам
    let [user, setUser] =
        useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const url_token = 'http://127.0.0.1:8000/api/token/'
    const url_refresh = 'http://127.0.0.1:8000/api/token/refresh/'

    let loginUser = async (event) => {
        // отправляем данные из формы на сервер
        event.preventDefault()
        console.log('Форма отправлена')
        let response = await fetch(url_token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': event.target.email.value,
                'password': event.target.password.value
            })
        })
        // получаем токены в ответ
        let data = await response.json()
        console.log('Our data: ', data)
        console.log('Our response: ', response)
        // сохраняем данные полученные при ответе сервера
        if (response.status === 200) {
            setAuthTokens(data)
            // расшифровываем аксес токен для получения информации о пользователе
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            // history.push('/')
            console.log(authTokens)
            console.log(user)
        } else {
            alert('Что-то пошло не так')
            console.log('Our response: ', response)
        }
    }
    // функция для деавторизаци
    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        // history.push('/')
    }

    let updateToken = async (event) => {
        console.log('Updating token...')

        let response = await fetch(url_refresh, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'refresh': authTokens.refresh,
            })
        })
        let data = await response.json()
        console.log('Our data: ', data)
        console.log('Our response: ', response)

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }
    }

    const contextData = {
        'user': user,
        'loginUser': loginUser,
        'logoutUser': logoutUser,
        'updateToken': updateToken
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if(authTokens) {
                updateToken()
            }
        }, 240000)
        return ()=> clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}