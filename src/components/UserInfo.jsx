import React, {useContext, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../context/AuthContext";
import FetchUsers from "../data/FetchUsers";


const UserInfo = () => {
    const {user} = useContext(AuthContext)
    let userInfo = FetchUsers()

    useEffect(() => {
            if (userInfo.gender === 'M') {
                document.querySelector('#man').checked = true
            } else if (userInfo.gender === 'F') {
                document.querySelector('#woman').checked = true
            }
        }, [userInfo]
    )

    return (
        <>
            <div>
                <h1>Личный кабинет</h1>
                <p>Приветствуем, {user.name}. Здесь вы можете отредактировать ваши данные</p>
                <p>Ваша почта — {user.email}</p>
            </div>
            <Form style={{width: '40%'}}>
                <h5>Личные данные</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'name'} type={'text'} placeholder={'Ваше имя'}
                                  defaultValue={user ? user.name : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'surname'} type={'text'} placeholder={'Ваша фамилия'}
                                  defaultValue={userInfo ? userInfo.surname : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check inline type={"radio"} label={`Мужчина`} name={'gender'} id={'man'}
                        // onChange={userInfo.gender === "M" ? isChecked : false}
                    />

                    <Form.Check inline type={"radio"} label={`Женщина`} name={'gender'} id={'woman'}

                        // onChange={userInfo.gender === "F" ? isChecked : false}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'birthdate'} type={'date'} placeholder={'Дата рождения'}
                                  defaultValue={userInfo.birthdate != null ? userInfo.birthdate : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <h5>Контакты</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'phone'} type={'tel'} placeholder={'Контактный номер'}
                                  defaultValue={userInfo ? userInfo.phone : []}
                        // pattern={'[7-8]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}'}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'email'} type={'email'} placeholder={'Ваш email'}
                                  defaultValue={userInfo ? userInfo.email : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <h5>Адресные данные</h5>
                <Form.Group className="mb-3">
                    <Form.Control name={'city'} type={'text'} placeholder={'Город'}
                                  defaultValue={userInfo ? userInfo.city : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'street'} type={'text'} placeholder={'Улица'}
                                  defaultValue={userInfo ? userInfo.street : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'house'} type={'text'} placeholder={'Дом'}
                                  defaultValue={userInfo ? userInfo.house : []}
                        // onChange={(event) => handleData(event)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name={'apartment'} type={'text'} placeholder={'Квартира'}
                                  defaultValue={userInfo.apartment != null || userInfo ? userInfo.apartment : []}
                        // onChange={(event) => handleData(event)}
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