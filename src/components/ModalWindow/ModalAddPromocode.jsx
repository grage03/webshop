import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Context } from '../../index';

const ModalAddPromocode = ({ modalAddPromocode, setModalAddPromocode }) => {
    const { promocodes } = useContext(Context);

    const 
        [ promocodeName, setPromocodeName ] = useState(''),
        [ promocodeDiscount, setPromocodeDiscount ] = useState('1%');

    const addPromocode = () => {
        promocodes.setPromocode([...promocodes.promocode, {
            id: promocodes.promocode.length + 1,
            name: promocodeName,
            discount: promocodeDiscount,
            activations: 0,
            productsPurchased: 0
        }]);

        setModalAddPromocode(false);
    };

    return (
        <Modal show={modalAddPromocode} onHide={setModalAddPromocode}>
            <Modal.Header closeButton>
                <Modal.Title>Изменение описания</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Label>Название промокода...</Form.Label>
                <Form.Control 
                    className="mb-4"
                    type="text" 
                    placeholder="#promocode" 
                    value={promocodeName}
                    onChange={(e) => setPromocodeName(e.target.value)}
                />

                <Form.Label>Размер скидки...</Form.Label>
                <Form.Control 
                    className="mb-4"
                    as="select"
                    value={promocodeDiscount}
                    onChange={(e) => setPromocodeDiscount(e.target.value)}
                >
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </Form.Control>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={() => addPromocode()}>
                    Добавить промокод
                </Button>
                <Button variant="outline-info" onClick={() => setModalAddPromocode(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export { ModalAddPromocode };
