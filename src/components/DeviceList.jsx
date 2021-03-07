import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from './../index';
import { DeviceItem } from './DeviceItem';

const DeviceList = observer(() => {
    const { devices } = useContext(Context);

    const 
        deviceType = (devices.section.filter(item => item.id === devices.isDeviceActive)).map(item => item.device),
        listOfDevice = devices.devicesItem.filter(item => item.type === deviceType[0]),
        d = deviceType[0] === 'Все' ? devices.devicesItem : listOfDevice,
        isFound = d.length === 0 ? false : true;

    return (
        <Container>
            {
                isFound 
                    ? (
                        <Row className="mt-5">
                            {d.map(item => {
                                return <DeviceItem key={item.id} devices={item}/>
                            })}
                        </Row>
                    ) : <h1 style={{textAlign: 'center'}} className="mt-5">Ничего не найдено!</h1>
            }
        </Container>
    );
});

export { DeviceList };