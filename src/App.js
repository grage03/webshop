import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import Header from './components/Header.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
