import React, {Component, } from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, MenuItem, NavDropdown, NavItem, NavbarBrand, NavbarToggler, Collapse, NavbarNav, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
class MainNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
      }
    static propTypes = {
        userCategories: PropTypes.array
      }
    
    static defaultProps = {
        userCategories: []
      }

      onClick=()=>{
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    viewAllCategories = ()=>{
        this.props.history.push('/AllCategories');
    }

    selectCategory(href){
        this.props.history.push(href);
    }

    render(){
        return(
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                {/* <a href="#home">Expenses</a> */}
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                Link
                </NavItem>
                <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} onClick={this.viewAllCategories}>View All</MenuItem>
                    <MenuItem divider />
                    {
                        this.props.userCategories.map((item, index)=>{
                            return (
                                <MenuItem 
                                    onClick={this.selectCategory.bind(this, "/MenuItem/" +item.ItemId)} 
                                    key={item.Name + index} 
                                    eventKey={item.Name + index}>
                                    {item.Name}
                                </MenuItem>
                            )
                        })
                    }
                    
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
         </Navbar>
            
        )
    }
}

export default withRouter(MainNavBar);