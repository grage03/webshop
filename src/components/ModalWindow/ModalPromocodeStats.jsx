import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Context } from '../../index';

const ModalPromocodeState = observer(({ modalPromocode, setModalPromocode }) => {
    const { promocodes } = useContext(Context);

    const deletePromocode = (id) => {
        promocodes.setPromocode(promocodes.promocode.filter(item => item.id !== id));
    };

    return (
        <Modal show={modalPromocode} onHide={() => setModalPromocode(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Статистика промокодов</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    promocodes.promocode.map(item => {
                        return (
                            <div style={{border: '1px solid gray', padding: '15px 20px'}} key={item.id} className="mb-3">
                                <h5>Промокод #{item.name} - Скидка {item.discount}%</h5> 
                                <p>Активаций - {item.activations}</p>
                                <p>Приоберетено товаров - {item.productsPurchased}</p>
                                <Button variant="outline-danger" onClick={() => deletePromocode(item.id)}>Удалить</Button>
                            </div>
                        )
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-info" onClick={() => setModalPromocode(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export { ModalPromocodeState };
