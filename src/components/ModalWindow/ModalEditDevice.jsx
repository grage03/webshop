import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Context } from '../..';
import { useParams, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { FormInformation } from '../FormInformation';
import { STORE_ROUTE } from '../../utiles/consts';

const ModalEditDevice = observer(({ isDeviceEdit, setIsDeviceEdit }) => {
    const { devices } = useContext(Context);
    const deviceId = useParams();
    const history = useHistory();

    const currentDevice = devices.devicesItem.find(item => item.id === +deviceId.id)

    const 
        [ deviceName, setDeviceName ] = useState(currentDevice.name),
        [ deviceType, setDeviceType ] = useState(currentDevice.type),
        [ deviceDesription, setDeviceDescription ] = useState(currentDevice.description),
        [ devicePrice, setDevicePrice] = useState(currentDevice.price),
        [ deviceImg, setDeviceImg ] = useState(currentDevice.img),
        [ deviceProperties, setDeviceProperties ] = useState(currentDevice.properties);

    const getId = (max, min) => Math.floor(Math.random() * (max - min)) + min;

    const deleteDeviceProperties = (id) => {
        const updateDeviceProperties = deviceProperties.filter(item => item.id !== id);

        setDeviceProperties([...updateDeviceProperties]);
    };

    const addInfoProperties = (key, value, id) => {
        setDeviceProperties(deviceProperties.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    function addDeviceProperties() {
        setDeviceProperties([...deviceProperties, {
            id: getId(1, 20000),
            name: '',
            text: ''
        }]);
    };

    const updateDeviceInfo = (id) => {
        devices.setDevicesItem([...devices.devicesItem.map(item => item.id !== id ? item : {
            id: item.id,
            name: deviceName, 
            type: deviceType,
            description: deviceDesription,
            price: devicePrice,
            img: deviceImg || null,
            properties: [...deviceProperties]
        })]);

        setIsDeviceEdit(false);

        history.push(STORE_ROUTE);
    }

    const deviceProps = [
        deviceName, 
        deviceType, 
        deviceDesription, 
        devicePrice, 
        deviceImg, 
        deviceProperties,
        setDeviceName, 
        setDeviceType, 
        setDeviceDescription, 
        setDevicePrice, 
        setDeviceImg
    ];

    return (
        <Modal show={isDeviceEdit} onHide={setIsDeviceEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Изменение описания</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormInformation 
                    editDevice={deviceProps}
                    addDevice={deviceProps} 
                    addDeviceProperties={addDeviceProperties} 
                    addInfoProperties={addInfoProperties}
                    deleteDeviceProperties={deleteDeviceProperties}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={() => updateDeviceInfo(+deviceId.id)}>
                    Сохранить изменения
                </Button>
                <Button variant="outline-info" onClick={() => setIsDeviceEdit(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export { ModalEditDevice };