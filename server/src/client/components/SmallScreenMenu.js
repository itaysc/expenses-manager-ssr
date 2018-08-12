import React, {Component} from 'react';
import {ListGroup, ListGroupItem } from 'react-bootstrap';

class SmallScreenMenu extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ListGroup>
      {
        this.props.menuItems.map((item)=>{
          return <ListGroupItem key={item.href} href={item.href}>
                  <span className="bold">{item.imageText}</span>
                  </ListGroupItem>;
        })
      }
      </ListGroup>
    );
  }
}

export default SmallScreenMenu;
