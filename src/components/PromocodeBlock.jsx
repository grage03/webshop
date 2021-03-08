import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const PromocodeBlock = observer(({ discount, setDiscount }) => {

    const activatingDiscount = () => {

    };

    return (
        <Form style={{border: '1px solid gray', padding: '35px 55px'}} className="mb-5">
            <Form.Control type="promocode" placeholder="Введите промокод..." />
            <Form.Text className="text-muted">
                Промокод может дать скидку в размере от 5% до 15%
            </Form.Text>
            <Button className="mt-4" variant="info" onClick={() => activatingDiscount()}>Активировать промокод</Button>
        </Form>
    );
});

export { PromocodeBlock };
