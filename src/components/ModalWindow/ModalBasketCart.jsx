import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Context } from '../../index';
import { useHistory } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utiles/consts';

const ModalBasketCart = ({ isBasketCart, setIsBasketCart }) => {
    const { devices } = useContext(Context);
    const history = useHistory();

    const calculatePrice = () => {
        let prise = 0;

        devices.basketDevices.map(item => prise += item.price * item.quantity);

        return prise;
    }

    const proceedPayment = () => {
        setIsBasketCart(false);

        history.push(BASKET_ROUTE);
    }

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
                                <p 
                                    key={item.id} 
                                    style={{textAlign: 'center'}}
                                ><span>{item.quantity}</span> шт. - {item.name}</p>
                            );
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
}

export { ModalBasketCart };
