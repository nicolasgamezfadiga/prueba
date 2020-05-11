import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  
  
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <Link to='/'>Home</Link>
      
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/registro/'>Registro</Link>
      
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/login/'>Login</Link>
          
          </a>
          <a class="navbar-brand" href="#">
            <Link to='/perfil/'>Perfil</Link>
          
          </a>
          
        </nav>
      </div>
    );
  }
}

export default Menu;
