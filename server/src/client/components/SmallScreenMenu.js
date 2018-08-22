import React, {Component} from 'react';
import {ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
            return <ListGroupItem key={item.Name + index} >
                    <Link to={"/MenuItem/" +item.ItemId}>
                        <span className="bold">{item.Name}</span>
                    </Link>
                    </ListGroupItem>;
          })
        }
        </ListGroup>
      </center>
    );
  }
}

export default SmallScreenMenu;
