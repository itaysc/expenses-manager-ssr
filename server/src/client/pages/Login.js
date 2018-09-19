import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/login';


class Login extends Component {
  constructor(props){
      super(props);
      this.state={
          email:"",
          password:"",
          showErr: false
      }

      this.submit = this.submit.bind(this);
  }
 
  static getDerivedStateFromProps(nextProps, nextState){
    if(nextProps.loginData && nextProps.loginData.token){
      nextProps.history.push("/Dashboard");
    }

    if(nextProps.loginData && nextProps.loginData.gqlData){
      alert(nextProps.loginData.gqlData);
    }

    return null;
  }

  componentDidMount(){
   // this.props.testGql();
  }

submit(){
    this.props.signIn({email:this.state.email, password: this.state.password});
}

onEmailChange = (e)=>{
  this.setState({email: e.target.value});
}

onPasswordChange = (e)=>{
  this.setState({password: e.target.value});
}
  render() {
    return (
      <form className="login">
          <h1 className="login-title">Welcome</h1>
          <input type="text" value={this.state.email} 
              onChange={this.onEmailChange} className="login-input" 
              placeholder="Email Adress"/>
          <input type="password" value={this.state.password} 
               onChange={this.onPasswordChange} className="login-input" 
               placeholder="Password"/>
          <p className="errLbl" style={{display:this.state.showErr?"block":"none"}}>Invalid email or password.</p>
          <input type="button" value="Login" onClick={this.submit} className="login-button"/>
        <p className="login-lost"><a href="">Forgot Password?</a></p>
      </form>

    );
  }
}

const mapStateToProps = (state)=>{
  return{
    loginData: state.loginData
  }
}

export default {
  component: connect(mapStateToProps, loginActions)(Login)
};
