import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Context } from '../../index';
import { useHistory } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utiles/consts';
import { observer } from 'mobx-react-lite';

const ModalBasketCart = observer(({ isBasketCart, setIsBasketCart }) => {
    const { devices } = useContext(Context);
    const history = useHistory();

    const calculatePrice = () => {
        let prise = 0;

        devices.basketDevices.map(item => prise += item.price * item.quantity);

        return prise;
    };

    const proceedPayment = () => {
        setIsBasketCart(false);

        history.push(BASKET_ROUTE);
    };

    const updateQuantity = (key, id, quantity) => {
        if (quantity === 1 && key === 'delete') {
            
            const itemIndex = devices.basketDevices.findIndex(item => item.id === id);
            const updateBasketDevices = devices.basketDevices.filter((item, index) => index !== itemIndex);
            devices.setBasketDevices([...updateBasketDevices]);

        } else devices.setBasketDevices(devices.basketDevices.map(item => item.id === id ? key === 'add' ? { ...item, quantity: item.quantity + 1 } : { ...item, quantity: item.quantity - 1 } : item));
    
    };

    return (
        <Modal show={isBasketCart} onHide={() => setIsBasketCart(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Ваша корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    devices.basketDevices.length === 0 
                        ? <h2 style={{textAlign: 'center'}}>Ваша корзина пуста!</h2> 
                        : devices.basketDevices.map(item => {
                            return (
                                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}} key={item.id}>

                                    <Button 
                                        variant="outline-success" 
                                        style={{marginRight: '10px'}} 
                                        onClick={() => updateQuantity('add', item.id, item.quantity)}
                                    >Добавить</Button>

                                    <p  
                                        style={{textAlign: 'center'}}
                                    ><span>{item.quantity}</span> шт. - {item.name}</p>

                                    <Button 
                                        variant="outline-danger" 
                                        style={{marginLeft: '10px'}} 
                                        onClick={() => updateQuantity('delete', item.id, item.quantity)}
                                    >Удалить</Button>

                                </div>
                            )
                        })
                }
                {
                    devices.basketDevices.length > 0 
                        ? <h4 style={{textAlign: 'center', marginTop: '35px'}}>Сумма к оплате - {calculatePrice()} руб.</h4>
                        : null
                }
            </Modal.Body>
            <Modal.Footer>
            {
                devices.basketDevices.length !== 0 
                    ? <Button variant="outline-success" onClick={() => proceedPayment()}>Перейти к оплате</Button>
                    : null
            }
            <Button variant="outline-info" onClick={() => setIsBasketCart(false)}>
                Закрыть
            </Button>
            </Modal.Footer>
        </Modal>
    );
});

export { ModalBasketCart };
