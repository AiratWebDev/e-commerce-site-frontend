import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";


const Feedback = () => {
    const apiURL = "http://127.0.0.1:8000/api/v1/reviews"
    const [data, setData] = useState({
        name: "",
        email: "",
        topic: "",
        review: ""
    })


    function submitData(event) {
        event.preventDefault()
        Axios.post(apiURL, {
            name: data.name,
            email: data.email,
            topic: data.topic,
            review: data.review
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error))

        const inputs = document.querySelectorAll('#name, #email, #topic, #review')
        inputs.forEach(
            (input) => {
                input.value = ''
            }
        )
    }

    function handleData(event) {
        const newData = {...data}
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }


    return (
        <div className={'feedback'}>
            <Form onSubmit={(event) => submitData(event)}>
                <h1>Обратная связь</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control id={'name'} type={'text'} placeholder={'Ваше имя'}
                                  onChange={(event) => handleData(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control id={'email'} type="email" placeholder="E-mail"
                                  onChange={(event) => handleData(event)}/>
                    <Form.Text className="text-muted">
                        Мы отправим ответ на ваш e-mail
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Тема обращения</Form.Label>
                    <Form.Control id={'topic'} type={'text'} placeholder={'Тема обращения'}
                                  onChange={(event) => handleData(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Отзыв</Form.Label>
                    <Form.Control id={'review'} as="textarea" rows={10} placeholder={'Ваш отзыв'}
                                  onChange={(event) => handleData(event)}/>
                </Form.Group>

                <Button variant="primary" type="submit" style={{backgroundColor: '#4f72ff'}}>
                    Отправить
                </Button>
            </Form>
        </div>
    );
};

export default Feedback;