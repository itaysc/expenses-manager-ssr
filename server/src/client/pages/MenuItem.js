import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as menuItemActions from '../actions/'
import Sparkline from '../components/Sparkline';
class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            itemName: this.props.match.params.itemName
        }
    }

    componentDidMount(){
        //this.props.fetchItemData(this.state.itemName);
    }

    render(){
        return(  
            <div> 
                <Sparkline/>
            </div> 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        data: state.menuItemData
    }
}
export default {
    component: connect(mapStateToProps, menuItemActions)(MenuItem)
} 