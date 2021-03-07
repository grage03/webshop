import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../../index';
import { STORE_ROUTE } from '../../utiles/consts';

function ModalDeleteDevice({ isDeviceDelete, setIsDeviceDelete }) {
    const { devices } = useContext(Context);
    const history = useHistory();
    const deviceId = useParams(); 
    const currentDevice = devices.devicesItem.filter(item => item.id !== +deviceId.id);

    const deleteDevice = () => {
        setIsDeviceDelete(false);
        devices.setDevicesItem([...currentDevice]);

        history.push(STORE_ROUTE);
    }

    return (
        <Modal show={isDeviceDelete} onHide={() => setIsDeviceDelete(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Удаление товара</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы точно хотите удалить товар из магазина?</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => deleteDevice()}>
                    Удалить
                </Button>
                <Button variant="outline-info" onClick={() => setIsDeviceDelete(false)}>
                    Отменить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export { ModalDeleteDevice };