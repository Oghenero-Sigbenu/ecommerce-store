import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu
	// NavLink as BstNavLink,
} from "reactstrap";
import "./NavbarApp.css"
//actions

class AppNavbar extends Component {
	state = {
		    isOpen: false
	        };
	        toggle = () => {
		        this.setState(prevState => ({
			        isOpen: !prevState.isOpen
		            }));
	                };

    render() {
		const {user,token} = this.props;
		// const {toggle, isOpen} = this.state;
		return (
			<div >
			<Navbar dark className="nav" expand="md">
			<NavbarBrand tag={NavLink} to="/" >
				<div className="logo"><h2>Foody</h2></div>	
			</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink  to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/products">Product</NavLink>
            </NavItem>
			{token ?
				<NavItem>
				<NavLink to={`/cart/${user.id}`} className="nav-link">
					Cart
				</NavLink>
				</NavItem>
				: ""} 
           			{token ? (
                  <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret>
                      {user && user.username}
                    </DropdownToggle>
                    <DropdownMenu right >
                      {/* <DropdownItem >
                        <NavLink to="/edit-profile" className="nav-link">Edit Profile</NavLink>
                      </DropdownItem> */}
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
					) : (
					<NavLink to="/login" className="nav-link">
						Login
					</NavLink>)}
          </Nav>
        </Collapse>
      </Navbar>
	</div>
		);
	}
}
  
const mapStateToProps = (state) => {
	const { isAuth,token,user } = state.auth;
	return {
		isAuth,token,user
	}
  }
  export default connect(
		mapStateToProps,
	   )(AppNavbar);
