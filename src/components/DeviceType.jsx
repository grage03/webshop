import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const DeviceType = observer(() => {
    const { devices } = useContext(Context)

    return (
        <ListGroup className="d-flex justify-content-center mt-3" horizontal>
            {devices.section.map(type => 
                <ListGroup.Item 
                    key={type.id}
                    active={type.id === devices.isDeviceActive}
                    style={{cursor: 'pointer', userSelect: 'none'}}
                    onClick={() => devices.setIsDeviceActive(type.id)}
                >
                    {type.device}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});


