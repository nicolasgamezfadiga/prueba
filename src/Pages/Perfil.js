import React, { Component } from 'react';

class Perfil extends Component {
  constructor(props){
      super(props)
      console.log(props.match.params)
  }
  render() {
    return (
      <div className="App">
        Perfil Component
      </div>
    );
  }
}

export default Perfil;
