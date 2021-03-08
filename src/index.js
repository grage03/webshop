import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import PromocodeStore from './store/PromocodeStore';
import UserStore from './store/UserStore';

export const Context = React.createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    devices: new DeviceStore(),
    promocodes: new PromocodeStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
