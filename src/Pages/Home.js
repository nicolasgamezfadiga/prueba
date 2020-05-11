import React, { Component } from 'react';
import PerfilDetalle from '../Components/PerfilDetalle'
class Home extends Component {
  constructor(){
    super()
    this.state = {
      perfiles:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        this.setState({
          perfiles:data
        })
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.perfiles.map(perfil=><PerfilDetalle data={perfil} />)}
      </div>
    );
  }
}

export default Home;
