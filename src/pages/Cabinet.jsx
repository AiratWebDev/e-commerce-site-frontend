import React, {useContext} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import UserInfo from "../components/UserInfo";

const Cabinet = () => {
    return (
        <>
            <div style={{padding: '30px'}}>
                <Tabs
                    defaultActiveKey="personal"
                    id="fill-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="personal" title="Личные данные">
                        <UserInfo/>
                    </Tab>
                    <Tab eventKey="orders" title="Заказы">
                        <h1>Список заказов</h1>
                    </Tab>
                </Tabs>


            </div>
        </>
    );
};

export default Cabinet;