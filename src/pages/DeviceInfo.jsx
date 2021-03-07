import React, { useContext, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ModalDeleteDevice } from '../components/ModalWindow/ModalDeleteDevice';
import { ModalEditDevice } from '../components/ModalWindow/ModalEditDevice';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';

const DeviceInfo = observer(() => {
    const { user, devices } = useContext(Context);

    const 
        [ isDeviceDelete, setIsDeviceDelete ] = useState(false),
        [ isDeviceEdit, setIsDeviceEdit ] = useState(false);

    const {
        name,
        description,
        price,
        img
    } = devices.currentDevice;

    return (
        <Container className="mt-5 mb-5">
            <Row style={{marginBottom: '15px'}}>
                <Col md={3}>
                    {
                        img === null ? 'Изображение отсутствует' : (
                            <Image src={img} rounded />
                        )
                    }
                </Col>
                <Col md={6}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    {
                        user.isLogin ? (
                            <>
                                <Button variant="info" className="mr-3" onClick={() => setIsDeviceEdit(true)}>Изменить описание</Button>
                                <Button variant="info" onClick={() => setIsDeviceDelete(true)}>Удалить товар</Button>
                            </>
                        ) : null
                    }
                </Col>
            </Row>
            <Row style={{marginBottom: '15px'}}>
                <Col md={3}>
                    <h4>{`Цена на ${new Date().getDate()}.${new Date().getMonth() === 0 ? 1 : new Date().getMonth() + 1}.${new Date().getFullYear()}`}</h4>
                    {
                        <p>Цена: {price} р.</p>
                    }
                </Col>
            </Row>
            {
                devices.currentProperties.length === 0 ? <h4>Дополнительные свойства отстутствуют!</h4> : (
                    <>
                    <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Col md={5}>
                            <h4>Название свойства</h4>
                        </Col>
                        <Col md={5}>
                            <h4>Описание свойства</h4>
                        </Col>
                    </Row>
                    {
                        devices.currentProperties.map(item => {
                            return (
                                <Row style={{display: 'flex', justifyContent: 'space-between'}} key={item.id}>
                                    <Col md={5}>
                                        {item.name}
                                    </Col>
                                    <Col md={5}>
                                        {item.text}
                                    </Col>
                                </Row>
                            );
                        })
                    }
                    </>
                )
            }
            <ModalDeleteDevice isDeviceDelete={isDeviceDelete} setIsDeviceDelete={setIsDeviceDelete}/>
            <ModalEditDevice isDeviceEdit={isDeviceEdit} setIsDeviceEdit={setIsDeviceEdit}/>
        </Container>
    )
});

export default DeviceInfo;