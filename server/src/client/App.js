import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import APIErrorsAlert from '../client/components/APIErrorsAlert';
import MainNavBar from '../client/components/MainNavBar';
import {getUserCategories} from '../client/actions/menuItem';
class App extends React.Component{

  componentDidMount(){
    this.props.getUserCategories();
  }

  render(){
    return (
      <div>
        <MainNavBar userCategories = {this.props.userCategories}/>
        {renderRoutes(this.props.route.routes)}
        <APIErrorsAlert/>
      </div>
    );
  }

};

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


export default {
  component: connect(mapStateToProps, mapDispatchToProps)(App)
};
