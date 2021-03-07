import React, { useState, useContext } from 'react';
import { Modal, Button, Container, Form } from 'react-bootstrap';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { FormInformation } from '../../components/FormInformation'

const ModalDevice = observer(({ modalDevice, setModalDevice}) => {
    const { devices } = useContext(Context);

    const 
        [ deviceName, setDeviceName ] = useState(''),
        [ deviceType, setDeviceType ] = useState(''),
        [ deviceDesription, setDeviceDescription ] = useState(''),
        [ devicePrice, setDevicePrice] = useState(''),
        [ deviceImg, setDeviceImg ] = useState(''),
        [ deviceProperties, setDeviceProperties ] = useState([]);

    const getId = (max, min) => Math.floor(Math.random() * (max - min)) + min;

    function addDeviceProperties() {
        setDeviceProperties([...deviceProperties, {
            id: getId(1, 20000),
            name: '',
            text: ''
        }]);
    };

    const addDevice = () => {
        devices.setDevicesItem([...devices.devicesItem, {
            id: getId(200, 1000),
            name: deviceName, 
            type: deviceType,
            description: deviceDesription,
            price: devicePrice,
            img: deviceImg || null,
            properties: [...deviceProperties]
        }]);

        setModalDevice(false);
        setDeviceName('');
        setDeviceType('');
        setDeviceDescription('');
        setDevicePrice('');
        setDeviceProperties([]);
    };

    const deleteDeviceProperties = (id) => {
        const updateDeviceProperties = deviceProperties.filter(item => item.id !== id);

        setDeviceProperties([...updateDeviceProperties]);
    };

    const addInfoProperties = (key, value, id) => {
        setDeviceProperties(deviceProperties.map(item => item.id === id ? {...item, [key]: value} : item));
    };

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
        <Container>
            <Modal show={modalDevice} onHide={() => setModalDevice(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый товар</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <FormInformation 
                                addDevice={deviceProps} 
                                addDeviceProperties={addDeviceProperties} 
                                addInfoProperties={addInfoProperties}
                                deleteDeviceProperties={deleteDeviceProperties}/>
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={() => addDevice()}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
});

export { ModalDevice };