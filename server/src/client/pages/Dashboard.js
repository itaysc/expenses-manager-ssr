import React, { Component } from 'react';
import { connect } from 'react-redux';
import menuImageData from '../data/menuData';
import SmallScreenMenu from '../components/SmallScreenMenu';
import LargeScreenMenu from '../components/LargeScreenMenu';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                <div style={{color:'white'}}>asdasdasdasd</div>
                <div className="hidden-xs hidden-sm">
                     <LargeScreenMenu history={this.props.history} menuItems={menuImageData}/>
                </div>
                <div className="hidden-md hidden-lg">
                     <SmallScreenMenu history={this.props.history} menuItems={menuImageData}/>
                </div>
            </div>
        );
    }
}

export default{
    component: Dashboard,
    loadData: (store)=>{
        console.log("inside loadData");
    }
}