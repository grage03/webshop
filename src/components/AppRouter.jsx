import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '..';
import { authUser, publicUser } from '../routes';
import { STORE_ROUTE } from '../utiles/consts';

export default function AppRouter() {
    const { user } = useContext(Context);

    return (
        <Switch>
            {user.isLogin && authUser.map(({path, Component}) => {
                return <Route key={path} path={path} component={Component} exact/>
            })}
            {publicUser.map(({path, Component}) => {
                return <Route key={path} path={path} component={Component} exact/>
            })}
            <Redirect to={STORE_ROUTE}/>
        </Switch>
    );
}
