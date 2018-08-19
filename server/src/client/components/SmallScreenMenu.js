import React, {Component} from 'react';
import {ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SmallScreenMenu extends Component{
  constructor(props){
    super(props);
  }
  static propTypes = {
    userCategories: PropTypes.array
  }

static defaultProps = {
    userCategories: []
  }
  render(){
    return(
      <center>
        <ListGroup className={"col-lg-6 col-md-6 col-sm-12 col-xs-12 smallMenuList"}>
        {
          this.props.userCategories.map((item, index)=>{
            return <ListGroupItem key={item.Name + index} href={"/MenuItem/" +item.Name} >
                    <span className="bold">{item.Name}</span>
                    </ListGroupItem>;
          })
        }
        </ListGroup>
      </center>
    );
  }
}

export default SmallScreenMenu;
