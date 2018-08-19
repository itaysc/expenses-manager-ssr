import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as menuItemActions from '../actions/menuItem';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            itemId: this.props.match.params.itemId
        }
    }

    componentDidMount(){
        //this.props.fetchItemData(this.state.itemId);
    }

    render(){
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400},
            {name: 'Page B', uv: 3000, pv: 1398},
            {name: 'Page C', uv: 2000, pv: 9800},
            {name: 'Page D', uv: 2780, pv: 3908},
            {name: 'Page E', uv: 1890, pv: 4800},
            {name: 'Page F', uv: 2390, pv: 3800},
            {name: 'Page G', uv: 3490, pv: 4300},
      ];
        return(  
            <Fragment> 
                <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </Fragment> 
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        ...menuItemActions
    }, dispatch);
}

const mapStateToProps = (state)=>{
    return{
        data: state.menuItemData
    }
}
export default {
    component: connect(mapStateToProps, mapDispatchToProps)(MenuItem)
} 