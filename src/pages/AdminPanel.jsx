import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ModalType } from '../components/ModalWindow/ModalType';
import { ModalDevice } from '../components/ModalWindow/ModalDevice';
import { ModalPromocodeState } from '../components/ModalWindow/ModalPromocodeStats';
import { ModalAddPromocode } from '../components/ModalWindow/ModalAddPromocode';

export default function AdminPanel() {
    const 
        [modalType, setModalType] = useState(false),
        [modalDevice, setModalDevice] = useState(false),
        [modalPromocode, setModalPromocode] = useState(false),
        [modalAddPromocode, setModalAddPromocode] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant="info" className="mt-4" onClick={() => setModalDevice(true)}>Добавить устройство</Button>
            <Button variant="info" className="mt-4" onClick={() => setModalType(true)}>Добавить тип</Button>
            <Button variant="info" className="mt-4" onClick={() => setModalAddPromocode(true)}>Добавить промокод</Button>
            <Button variant="info" className="mt-4" onClick={() => setModalPromocode(true)}>Статистика промокодов</Button>
            <ModalType modalType={modalType} setModalType={setModalType} />
            <ModalDevice modalDevice={modalDevice} setModalDevice={setModalDevice} />
            <ModalAddPromocode modalAddPromocode={modalAddPromocode} setModalAddPromocode={setModalAddPromocode} />
            <ModalPromocodeState modalPromocode={modalPromocode} setModalPromocode={setModalPromocode} />
        </Container>
    )
}

