import React from 'react';
import { Alert } from 'react-bootstrap';

const ShowAlert = (props) => {
    const { variant } = props;

    return (
        <div style={{position: 'absolute', top: '5%'}}>
            <Alert variant={variant[0]} onClose={() => props.setAlert(false)} dismissible>
                <Alert.Heading>{variant[0] === 'success' ? 'Успех!' : 'Ошибка!'}</Alert.Heading>
                <p>{variant[1]}</p>
            </Alert>
        </div>
    );
}

export { ShowAlert };