import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import menuImageData from '../data/menuData';
import UserCategories from '../components/UserCategories';
import LargeScreenMenu from '../components/LargeScreenMenu';
import { Glyphicon, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {getUserCategories} from '../actions/menuItem';
import '../style/dashboard.css';
import Cookies from 'universal-cookie';
import MainNavBar from '../components/MainNavBar';
import {setIsServerRefresh} from '../actions/server';
const DISPLAYS ={LIST: 1, ICONS:2};
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            currDisplay: DISPLAYS.ICONS
        }

    }
   
    static propTypes = {
        userCategories: PropTypes.array
    }

    static defaultProps = {
        userCategories: []
    }
    componentDidMount(){
        this.props.getUserCategories();
    }
    changeDisplay = ()=>{
        if(this.state.currDisplay === DISPLAYS.ICONS){
            this.setState({currDisplay: DISPLAYS.LIST});
        }else{
            this.setState({currDisplay: DISPLAYS.ICONS});   
        }
    }
    render(){
        return(
            <Fragment>
                <div className="hidden-xs hidden-sm">
                     <Button className="changeMenuView" onClick={this.changeDisplay}>
                        <Glyphicon glyph={this.state.currDisplay === DISPLAYS.ICONS?"th-list": "picture"}/>
                     </Button>
                     {
                         this.state.currDisplay === DISPLAYS.ICONS &&
                        //  <LargeScreenMenu userCategories = {this.props.userCategories} history={this.props.history} menuItems={menuImageData}/>
                        <UserCategories userCategories = {this.props.userCategories} history={this.props.history} menuItems={menuImageData}/>
                     }
                                          {
                         this.state.currDisplay === DISPLAYS.LIST &&
                         <UserCategories userCategories = {this.props.userCategories} history={this.props.history} menuItems={menuImageData}/>
                        }
                </div>
                <div className="hidden-md hidden-lg">
                     <UserCategories userCategories = {this.props.userCategories} history={this.props.history} menuItems={menuImageData}/>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        userCategories: state.menuItemData && state.menuItemData.userCategories? state.menuItemData.userCategories: []
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        getUserCategories
    }, dispatch)
}

const loadData = (store, req)=>{
    
    const cookies = new Cookies(req.headers.cookie);
    let token = cookies.get('token');
    if(token){
        console.log(`inside Dashboard loadData. token ${token}`);
        return Promise.all([
            store.dispatch(getUserCategories(token)),
            store.dispatch(setIsServerRefresh(true))
        ])
    }
}

export default{
    component: connect(mapStateToProps, mapDispatchToProps)(Dashboard),
    loadData: loadData
}