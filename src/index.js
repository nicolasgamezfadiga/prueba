import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Link, Route, Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Layout/Menu';
import Registro from './Pages/Registro';
import Home from './Pages/Home';
import Perfil from './Pages/Perfil';

ReactDOM.render(<BrowserRouter>
    <div>
        <Route component={Menu} />  
        <Route path='/' exact component={Home} />
        <Route path='/registro' exact component={Registro} />
        <Route path='/login' exact component={Login} />
        <Route path='/perfil/:id' exact component={Perfil} />
    </div>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
