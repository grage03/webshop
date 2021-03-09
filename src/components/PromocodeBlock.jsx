import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';

const PromocodeBlock = observer(({ setDiscount, isPromocode, setIsPromocode }) => {
    const { promocodes } = useContext(Context);

    const [ userPromocode, setUserPromocode ] = useState('');

    const activatingDiscount = () => {
        setIsPromocode(promocodes.promocode.findIndex(item => item.name === userPromocode) !== -1 ? true : false);

        setDiscount(getDiscount());
    };

    const getDiscount = () => {
        return '' || promocodes.promocode.find(item => item.name === userPromocode).discount;
    };

    return (
        <Form style={{border: '1px solid gray', padding: '35px 55px'}} className="mb-5">
            {
                isPromocode 
                    ? (
                        <Form.Control 
                            type="promocode" 
                            placeholder="Введите промокод..." 
                            value={userPromocode}
                            onChange={(e) => setUserPromocode(e.target.value)}
                            readOnly
                        />
                    ) : (
                        <Form.Control 
                            type="promocode" 
                            placeholder="Введите промокод..." 
                            value={userPromocode}
                            onChange={(e) => setUserPromocode(e.target.value)}
                        />
                    )
            }

            <Form.Text className="text-muted">
                Промокод может дать скидку в размере от 1% до 15%
            </Form.Text>

            <Button className="mt-4" variant="info" onClick={() => activatingDiscount()}>Активировать промокод</Button>
            {
                isPromocode 
                    ? <h4 className="mt-4">Получена скидка размером {getDiscount()}%</h4> 
                    : null
            }
        </Form>
    );
});

export { PromocodeBlock };
