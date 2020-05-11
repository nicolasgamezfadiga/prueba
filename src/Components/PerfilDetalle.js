import React, { Component } from 'react';

class PerfilDetalle extends Component {
  constructor(props){
      super(props)
      console.log(props)
  }
  render() {
    return (
      <div className="App">
        Nombre: {this.props.data.name}
      </div>
    );
  }
}

export default PerfilDetalle;
