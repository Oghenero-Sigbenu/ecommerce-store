import React, {Component} from "react";
// import {TextField} from "@material-ui/core";
import Button from "../components/Common/Button";
import {reg, isValid} from "../components/Common/Validation";
import {register} from "../actions/auth";
import {connect} from "react-redux";
import TextField from "../components/Common/InputValidator";
import {AnimateInOut} from "../components/Common/AnimateInOut";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address:"",
      phone:"",
      username: "",
      fullname:"",
      disable: true,
      show: true,
      helperText: "",
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    if(this.props.token){
      this.props.history.push("/");
    }
  }

  handleChange(title, value, disable) {
    const { fullname, password, email, username, phone, address } = this.state;
   
    this.setState({
      [title]: value,
      disable: disable || (email === "" || !reg.test(email)  || password === "" || fullname === "" || username === "" || isValid(phone) || address === "") ? true : false
    })
  
  }
  submit(e) {
    e.preventDefault()
    const { fullname, password, email, username, phone, address  } = this.state;
    this.props.register({ fullname, password, email, username, phone, address })
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
    this.setState({
      show: false
    })
  }
  render() {
    const {fullname, password, email,show, username, phone, address } = this.state;
    const {isLoading} = this.props;
    return (
      <AnimateInOut className={show ? 'slide-in-top one' : 'slide-out-left'}>
      <div>
          <div className="box">
          <div className="inner-box">
        <h4>Register</h4>
        <form noValidate autoComplete="off" onSubmit={this.submit}>
            <TextField id="full-name" label="Full Name"name="fullname"  type="text" valType="name" value={fullname} getValue={this.handleChange} />
            <TextField id="email" label="Email address" helperText="Invalid email address" valType="email" name="email" type="email" value={email} getValue={this.handleChange} />
            <TextField id="username" label="Username" name="username" type="text" value={username} valType="text" getValue={this.handleChange} />
            <TextField id="password" label="Password" name="password" type="password" icon="true" value={password} valType="password" getValue={this.handleChange} />
            <TextField id="phone" type="text" label="Phone" value={phone} name="phone" valType="phone" getValue={this.handleChange} />
            <TextField id="address" label="Address"  type="text"name="address" valType="text" value={address} getValue={this.handleChange} />
            {isLoading ? "Loading" :<Button >Create Account</Button>}
        </form>
      </div>
      </div>
      </div>
      </AnimateInOut>
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

export default connect(mapStateToProps,{register} )(Signup);