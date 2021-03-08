import React, { useContext } from 'react';
import { Context } from './../index';
import { Card, Button, Col, CardDeck } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utiles/consts';

const DeviceItem = observer((props) => {
    const { user, devices } = useContext(Context);

    const history = useHistory();

    const {
        id,
        name, 
        description,
        price, 
    } = props.devices;

    const styles = {
        card: {
            height: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '15px',
            textAlign: 'justify'
        },
        ul: {
            listStyleType: 'none',
            padding: '0'
        }
    }

    const addBasketDevice = (id) => {
        const isItemInBasket = [...devices.basketDevices.map(item => item)].map(item => item.id === id);

        if (isItemInBasket.includes(true)) {
            const itemIndex = devices.basketDevices.findIndex(item => item.id === id);

            const newBasketDevices = devices.basketDevices.map((item, index) => {

                if (index === itemIndex) return { ...item, quantity: item.quantity + 1 };
                else return item;

            });

            devices.setBasketDevices([...newBasketDevices]);

        } else {

            devices.setBasketDevices([
                ...devices.basketDevices,
                Object.assign({}, ...devices.devicesItem.filter(item => item.id === id), {quantity: 1})
            ]);

        }
    }

    return (
        <Col md={3}>
            <CardDeck>
                <Card style={{width: '18rem', height: '420px'}} className="mb-5">
                    <div style={styles.card}>
                        <div>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <ul style={styles.ul}>
                                    {
                                        <li>Цена: {price} р.</li>
                                    }
                                </ul>
                            </div>
                            <Button 
                                variant="info" 
                                className="mb-2" 
                                onClick={() =>  {
                                    devices.setCurrentDevice(...devices.devicesItem.filter(item => item.id === id));
                                    devices.setCurrentProperties([...devices.currentDevice.properties.map(item => item)])

                                    history.push(DEVICE_ROUTE + '/' + id);
                                }}
                            >Подробнее</Button>
                            {
                                user.isLogin 
                                    ? <Button variant="info" onClick={() => addBasketDevice(id)}>Добавить в корзину</Button>
                                    : null
                            }
                        </div>
                    </div>
                </Card>
            </CardDeck>
        </Col>
    );
});

export { DeviceItem };
