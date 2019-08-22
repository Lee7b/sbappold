import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { withRouter } from "react-router-dom";

class Header extends React.Component { 
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
    render () {
        const currentLocation = this.props.location.pathname;
      
        return (
          <MDBNavbar color="blue-grey darken-3" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">SB</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem className={(currentLocation === '/' ? 'active' : '')}>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={(currentLocation === '/contact' ? 'active' : '')}>
                  <MDBNavLink to="/contact">Contact</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={(currentLocation === '/about' ? 'active' : '')}>
                  <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={(currentLocation === '/users' ? 'active' : '')}>
                  <MDBNavLink to="/users">API TEST</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Projects</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Project 1</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Project 2</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Project 3</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Project 4</MDBDropdownItem>
                    </MDBDropdownMenu>
                 </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/linkedin">
                    <MDBIcon fab icon="linkedin" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/github">
                    <MDBIcon fab icon="github" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  {/* <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown> */}
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
         </MDBNavbar>
        )
    }
}

export default withRouter(Header);