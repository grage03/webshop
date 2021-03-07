import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Form, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap';
import { Context } from '../index';

const FormInformation = observer((props) => {
    const { devices } = useContext(Context);

    const [
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
    ] = props.editDevice || props.addDevice;

    const {
        addDeviceProperties,
        addInfoProperties,
        deleteDeviceProperties
    } = props;

    return (
        <>
            <Form.Control 
                className="mb-3"
                type="text" 
                placeholder="Введите название товара..." 
                value={deviceName} 
                onChange={(e) => setDeviceName(e.target.value)}
            />

            <DropdownButton title={deviceType || 'Выберите тип...'} className="mb-3" variant="outline-info">
                {devices.section.map(item => {
                    return <Dropdown.Item key={item.id} onClick={() => setDeviceType(item.device)}>{item.device}</Dropdown.Item>
                })}
            </DropdownButton>
            
            <Form.Control 
                className="mb-3"
                type="text" 
                placeholder="Введите краткое описание товара..." 
                value={deviceDesription} 
                onChange={(e) => setDeviceDescription(e.target.value)}
            />

            <Form.Control 
                className="mb-3"
                type="text" 
                placeholder="Введите цену товара..." 
                value={devicePrice} 
                onChange={(e) => setDevicePrice(e.target.value)}
            />

            <Form.Control 
                className="mb-3"
                type="text" 
                placeholder="Введите url адрес фотографии или оставьте поле пустым..." 
                value={deviceImg} 
                onChange={(e) => setDeviceImg(e.target.value)}
            />

            <Button variant="outline-info" onClick={() => addDeviceProperties()}>Добавить новое свойство</Button>
            {
                deviceProperties.map((item) => {
                    return (
                        <Row className="mt-3" key={item.id}>
                            <Col md={4}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Название..." 
                                    value={item.name}
                                    onChange={(e) => addInfoProperties('name', e.target.value, item.id)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Описание..."
                                    value={item.text}
                                    onChange={(e) => addInfoProperties('text', e.target.value, item.id)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant="outline-danger" 
                                    onClick={() => deleteDeviceProperties(item.id)}
                                >Удалить</Button>
                            </Col>
                        </Row>
                    );
                }) 
            }
        </>
    );
})

export { FormInformation };