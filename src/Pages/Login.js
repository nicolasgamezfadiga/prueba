import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }
  login(e){
    console.log(this.state.email,this.state.password)
    e.preventDefault()
    e.stopPropagation();
  }
  handleChange(e){
    console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.login.bind(this)}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}  placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}   placeholder="Password"></input>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
      </div>
    );
  }
}

export default Login;
