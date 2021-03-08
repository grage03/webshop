import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ModalType } from '../components/ModalWindow/ModalType';
import { ModalDevice } from '../components/ModalWindow/ModalDevice';

export default function AdminPanel() {
    const 
        [modalType, setModalType] = useState(false),
        [modalDevice, setModalDevice] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant="info" className="mt-4" onClick={() => setModalDevice(true)}>Добавить устройство</Button>
            <Button variant="info" className="mt-4" onClick={() => setModalType(true)}>Добавить тип</Button>
            <Button variant="info" className="mt-4">Добавить промокод</Button>
            <Button variant="info" className="mt-4">Статистика промокодов</Button>
            <ModalType modalType={modalType} setModalType={setModalType}/>
            <ModalDevice modalDevice={modalDevice} setModalDevice={setModalDevice}/>
        </Container>
    )
}

