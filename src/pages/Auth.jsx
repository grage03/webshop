import React, { useState, useContext } from 'react';
import { Container, Form, Button, Card, Row } from 'react-bootstrap';
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, STORE_ROUTE } from '../utiles/consts';
import { ShowAlert } from '../components/ShowAlert';
import { Context } from './../index';

const Auth = () => {
    const { user } = useContext(Context);

    const 
        location = useLocation(),
        isAuth = location.pathname === LOGIN_ROUTE,
        history = useHistory();
        
    const    
        [ userPassword, setUserPassword ] = useState(''),
        [ userEmail, setUserEmail ] = useState(''),

        [ isAlert, setAlert ] = useState(false),
        [ statusAlert, setStatusAlert ] = useState(['', '']);

    const setUserInformation = (e) => {
        e.preventDefault();
        
        if (!isAuth && user.userInformation.isRegistration) {
            setStatusAlert(['warning', 'У вас уже есть зарегистрированный аккаунт!']);
            setAlert(true);
        } else if (isAuth && !user.isLogin && !user.userInformation.isRegistration) {
            setStatusAlert(['warning', 'Для начала вам нужно зарегистрировать аккаунт!']);
            setAlert(true);
        } else if (!isAuth && !user.isLogin) {
            user.setUserInformation({
                isRegistration: true,
                email: userEmail,
                password: userPassword
            });

            history.push(LOGIN_ROUTE);
        } else if (isAuth && user.userInformation.isRegistration) {
            user.setIsLogin(true);

            history.push(STORE_ROUTE);
        }
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: '90vh', position: 'relative'}}>
            { 
                isAlert 
                    ? <ShowAlert variant={statusAlert} setAlert={setAlert}/> 
                    : null 
            }
            <Card 
                className="p-4" 
                style={{width: '95vh'}}>
                <h3 style={{textAlign: 'center'}}>{isAuth ? 'Авторизация' : 'Регистрация'}</h3>

                <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Введите email..." 
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите ваш пароль..." 
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Никогда не говорите свой пароль кому-нибудь ещё.
                        </Form.Text>
                    </Form.Group>

                    <Row className="d-flex justify-content-between pl-3 pr-3">
                        {
                            isAuth ?
                                <div>
                                    Хочешь что-то купить? <NavLink to={REGISTRATION_ROUTE} exact>Зарегистрируйся!</NavLink>
                                </div> 
                                :
                                <div>
                                    Уже зарегистрирован? <NavLink to={LOGIN_ROUTE} exact>Заходи!</NavLink>
                                </div>
                        }
                        <Button 
                            variant="success" 
                            type="submit" 
                            className="align-self-end"
                            onClick={(e) => setUserInformation(e)}
                            >
                            {isAuth ? 'Авторизоваться' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>

            </Card>

        </Container>
    )
};

export default Auth;