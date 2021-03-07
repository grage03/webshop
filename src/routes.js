import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, STORE_ROUTE } from "./utiles/consts";

import AdminPanel from './pages/AdminPanel';
import Basket from './pages/Basket';
import Auth from './pages/Auth.jsx';
import Store from './pages/Store';
import DeviceInfo from './pages/DeviceInfo';

export const authUser = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicUser = [
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DeviceInfo
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: STORE_ROUTE,
        Component: Store
    }
]