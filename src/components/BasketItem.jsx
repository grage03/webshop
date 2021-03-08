import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const BasketItem = ({ name, description, price, img, quantity }) => {
    const styles = {
        span: {
            fontWeight: 'bold'
        },
        p: {
            marginTop: '35px'
        }
    };

    return (
        <div className="mb-5" style={{border: '1px solid gray', padding: '15px 25px'}}>
            <Row>
                <Col md={3}>
                    <Image src={img} width="150px" rounded />
                </Col>
                <Col md={6}>
                    <h2 className="mt-4">{name}</h2>
                    <p className="mt-4">{description}</p>
                </Col>
                <Col md={3}>
                    <p style={styles.p}><span style={styles.span}>{quantity}</span> шт. на сумму <span style={styles.span}>{price * quantity}</span> руб.</p>
                </Col>
            </Row>
        </div>
    )
}

export { BasketItem };
