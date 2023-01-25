import React from 'react';
import {useState} from "react";
import {Form, Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";

const Registration = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = 'http://127.0.0.1:8000/api/register/'

    let register = async (event) => {
        event.preventDefault()
        console.log('Нажатие')
        console.log(data)
        await Axios.post(url,
            {
                "username": data.name + ' ' + data.email,
                "email": data.email,
                "password": data.password,
                "name": data.name,
                "phone": data.phone
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log('Ошибка: ' + error.response.data))
    }

    function handleData(event) {
        const newData = {...data}
        newData[event.target.name] = event.target.value
        console.log(newData)
        setData(newData)
    }

    return (
        <>
            <Link variant="primary" onClick={handleShow}>
                Регистрация
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация на сайте</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(event) => {
                        register(event)
                    }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                name={'name'}
                                type={'text'}
                                placeholder={'Ваше имя'}
                                autoFocus
                                required
                                onChange={(event) => handleData(event)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Адрес электронной почты</Form.Label>
                            <Form.Control
                                name={'email'}
                                type={'email'}
                                placeholder={'Ваш email'}
                                required
                                onChange={(event) => handleData(event)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                                name={'phone'}
                                type={'tel'}
                                placeholder={'Контактный номер'}
                                // pattern={'[7-8]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}'}
                                onChange={(event) => handleData(event)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Label>Пароль для входа</Form.Label>
                            <Form.Control type={'password'} placeholder={'Ваш пароль'} name={'password'}
                                          onChange={(event) => handleData(event)}/>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="primary" type="submit" style={{width: '100%'}} onClick={handleClose}>
                                Зарегистрироваться
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Registration;