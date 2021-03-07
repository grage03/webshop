import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap'
import { DeviceList } from '../components/DeviceList';
import { DeviceType } from '../components/DeviceType';
import { Context } from './../index';
import { BasketCart } from '../components/BasketCart';

const Store = observer(() => {
    const { user } = useContext(Context);

    return (
        <Container style={{position: 'relative'}}>
            {
                user.isLogin
                    ? <BasketCart />
                    : null
            }
            <DeviceType />
            <DeviceList />
        </Container>
    )
});

export default Store;
