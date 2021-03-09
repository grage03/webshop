import React, { useContext, useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'; 
import { Context } from './../index';
import { BasketItem } from '../components/BasketItem';
import { PromocodeBlock } from '../components/PromocodeBlock';

const Basket = observer(() => {
    const { devices } = useContext(Context);

    const 
        [ discount, setDiscount ] = useState(0),
        [ isPromocode, setIsPromocode ] = useState('');

    const checkFinalPrice = () => {
        let finalPrice = 0;

        devices.basketDevices.map(item => finalPrice += item.quantity * item.price);

        return finalPrice;
    }

    return (
        <Container style={{display: 'flex', flexDirection: 'column'}}>

            <Button variant="info" className="mt-5 mb-3" style={{margin: '0 auto'}}>Оформить заказ</Button>

            <h1 className="mb-3" style={{margin: '0 auto'}}>Итоговая сумма - {checkFinalPrice()} руб.</h1>
            {
                discount !== 0
                    ? (
                        <h3 className="mb-3" style={{textAlign: 'center'}}>Цена со скидкой - {checkFinalPrice() - (checkFinalPrice() * discount / 100)} руб.</h3>
                    ) : null
            }

            <PromocodeBlock setDiscount={setDiscount} isPromocode={isPromocode} setIsPromocode={setIsPromocode}/>

            {
                devices.basketDevices.map(item => {
                    return <BasketItem {...item} key={item.id}/>
                })
            }

        </Container>
    )
});

export default Basket;
