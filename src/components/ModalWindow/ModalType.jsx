import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Context } from '../../index';

const ModalType = ({modalType, setModalType}) => {
    const { devices } = useContext(Context);

    const [ type, setType ] = useState('');

    return (
        <div>
            <Modal show={modalType} onHide={() => setModalType(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый тип</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control 
                            type="text" 
                            placeholder="Введите новый тип..." 
                            value={type} 
                            onChange={(e) => setType(e.target.value)}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setModalType(false)}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={() => {
                        devices.setSection([...devices.section, {id: devices.section.length + 1, device: type}]);
                        setModalType(false);
                        setType('');
                    }}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export { ModalType };
