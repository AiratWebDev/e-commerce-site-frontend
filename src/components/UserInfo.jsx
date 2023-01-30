import React, {useContext, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../context/AuthContext";
import FetchUsers from "../data/FetchUsers";
import Axios from "axios";


const UserInfo = () => {
    const {user} = useContext(AuthContext)
    let userInfo = FetchUsers()
    const data = {
        'email': userInfo['email'],
    }
    const patch_url = 'http://127.0.0.1:8000/api/user/register/'

    useEffect(() => {
            if (userInfo.gender === 'M') {
                document.querySelector('#man').checked = true
            } else if (userInfo.gender === 'F') {
                document.querySelector('#woman').checked = true
            }
        }, [userInfo]
    )

    const sendPatchData = async (event) => {
        event.preventDefault()
        console.log(data)
        console.log('Отправляем данные')

        await Axios.patch(patch_url, data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => console.log(response.data))
            .catch((error) => console.log('Код ошибки: ' + error.response.data))
    }

    const inputs = document.querySelectorAll('#name, #surname, #man, #woman, #birthdate,' +
        ' #phone, #email, #city, #street, #house, #apartment')

    const handleData = (event) => {
        data[event.target.name] = event.target.value

        inputs.forEach((input) => {
            if(!input.value) {
                data[input.name] = ''
            }
        })
        console.log(data)
    }

    return (
        <>
            <div>
                <h1>Личный кабинет</h1>
                <p>Приветствуем, {user.name}. Здесь вы можете отредактировать ваши данные</p>
                <p>Ваша почта — {user.email}</p>
            </div>
            <Form onSubmit={(event) => sendPatchData(event)} style={{width: '40%'}}>
                <h5>Личные данные</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'name'} type={'text'} placeholder={'Ваше имя'} id={'name'}
                                  defaultValue={user ? user.name : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'surname'} type={'text'} placeholder={'Ваша фамилия'} id={'surname'}
                                  defaultValue={userInfo ? userInfo.surname : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check inline type={"radio"} label={`Мужчина`} name={'gender'} id={'man'} value={'M'}
                                onChange={(event) => handleData(event)}
                    />

                    <Form.Check inline type={"radio"} label={`Женщина`} name={'gender'} id={'woman'} value={'F'}
                                onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'birthdate'} type={'date'} placeholder={'Дата рождения'} id={'birthdate'}
                                  defaultValue={userInfo.birthdate != null ? userInfo.birthdate : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <h5>Контакты</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'phone'} type={'tel'} placeholder={'Контактный номер'} id={'phone'}
                                  defaultValue={userInfo ? userInfo.phone : []}
                        // pattern={'[7-8]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}'}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'email'} type={'email'} placeholder={'Ваш email'} id={'email'}
                                  defaultValue={userInfo ? userInfo.email : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <h5>Адресные данные</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'city'} type={'text'} placeholder={'Город'} id={'city'}
                                  defaultValue={userInfo ? userInfo.city : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'street'} type={'text'} placeholder={'Улица'} id={'street'}
                                  defaultValue={userInfo ? userInfo.street : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'house'} type={'text'} placeholder={'Дом'} id={'house'}
                                  defaultValue={userInfo ? userInfo.house : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'apartment'} type={'text'} placeholder={'Квартира'} id={'apartment'}
                                  defaultValue={userInfo.apartment != null || userInfo ? userInfo.apartment : []}
                                  onChange={(event) => handleData(event)}
                    />
                </Form.Group>


                <Button variant="primary" type="submit" style={{backgroundColor: '#4f72ff'}}>
                    Сохранить
                </Button>
            </Form>
        </>
    );
};

export default UserInfo;