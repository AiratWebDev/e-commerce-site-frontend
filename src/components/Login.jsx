import React from 'react';
import {useState, useContext} from "react";
import {Form, Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";
import AuthContext from "../context/AuthContext";


const Login = () => {
    let {loginUser} = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link variant="primary" onClick={handleShow}>
                Войти
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти в личный кабинет</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<Form onSubmit={(event) => submitData(event)}>*/}
                    <Form onSubmit={loginUser}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                name={'username'}
                                type="text"
                                placeholder="Ваше имя"
                                autoFocus
                            />
                            {/*<Form.Control*/}
                            {/*    name={'email'}*/}
                            {/*    type="email"*/}
                            {/*    placeholder="Ваш email"*/}
                            {/*    autoFocus*/}
                            {/*/>*/}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Пароль для входа</Form.Label>
                            <Form.Control type={'password'} name={'password'} placeholder={'Ваш пароль'}/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                        >
                        </Form.Group>
                        <Modal.Footer>
                            <Button type={'submit'} style={{width: '100%'}} variant="primary" onClick={handleClose}>
                                Войти
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;



// const Login = () => {
//     let {user} = useContext(AuthContext)
//     let {loginUser} = useContext(AuthContext)
//
//     return (
//         <div>
//             {user && <p>Hello, {user.username}</p>}
//             <form onSubmit={loginUser}>
//                 <input type="text" name={'username'} placeholder={'Enter your name'}/>
//                 <input type="password" name={'password'} placeholder={'Enter your password'}/>
//                 <input type="submit"/>
//             </form>
//         </div>
//     )
// }