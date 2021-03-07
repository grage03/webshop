import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { Nav, Navbar, Button, Container} from 'react-bootstrap';
import { Context } from './../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, STORE_ROUTE } from '../utiles/consts';

const Header = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();
 
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={STORE_ROUTE} style={{color: 'white', fontSize: '25px'}}>Магазин вещей</NavLink>
                {
                    user.isLogin ? 
                        <Nav className="ml-auto">
                            <Button 
                                className="mr-3"
                                variant="outline-info"
                                onClick={() => history.push(ADMIN_ROUTE)}>
                                    Администратор
                            </Button> 
                            <Button 
                                variant="outline-info" 
                                onClick={() => {
                                    user.setIsLogin(false);
                                    history.push(STORE_ROUTE);
                                }}>
                                    Выйти
                            </Button> 
                        </Nav> 
                        : 
                        <Nav className="ml-auto">
                            <Button 
                                variant="outline-info" 
                                onClick={() => history.push(LOGIN_ROUTE)}>
                                    Авторизоваться
                            </Button> 
                        </Nav> 
                }
            </Container>
        </Navbar>
    );
});

export default Header;
