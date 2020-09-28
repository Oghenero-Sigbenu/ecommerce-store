import React, {Component} from "react";
import {
   TextField 
}from "@material-ui/core";
import { reg } from '../components/Common/Validation';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {login} from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disable: true,
      show: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount(){
    if(this.props.token){
      this.props.history.push("/");
    }
  }
  handleChange(e){
    const { email, password, disable} = this.state;
    this.setState({
      [e.target.name] : e.target.value,
      disable: disable || (email === "" || !reg.test(email) || password === "") ? true : false
  })
  }
  submit(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.login({email, password})
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
    this.setState({
      show: false
    })
  }
  render(){
    const {email, password} = this.state;
    return(
            <div className="">
                <div className="box1">
                  <div className="inner-box">
                <h4>Login</h4>
                <form autoComplete="off" onSubmit={this.submit}>
                      <TextField id="standard-basic" helperText="Incorrect entry."label="Email address"  name="email" value={email} onChange={this.handleChange} />
                      <TextField id="standard" label="Password" value={password} name="password" type="password" onChange={this.handleChange}/>
                      <div className="flex">
                        <button className="new">Login</button>
                      <button className="trans"><NavLink to="/register">Create Account</NavLink></button>
                      </div>
                </form>
                </div>
                </div>
             </div>
    )
}
}

const mapStateToProps = (state) => {
  const { user, token, isLoading, msg, isLoggedIn } = state.auth;
  return {
    user,
    token,
    isLoading,
    msg,
    isLoggedIn,
  }
}
export default connect(mapStateToProps,{login} )(Login);