import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, Button} from 'react-bootstrap';
import '../style/bootstrap.min.css';
import {hideApiErrorMessage} from '../actions/APIError';
import { withRouter } from "react-router-dom";
class APIErrorsAlert extends Component{
    constructor(props){
        super(props);
        this.state={
            showMsg: false,
            data:{Message:""}
        }
    }

    static getDerivedStateFromProps(nextProps, nextState){
        if(nextProps.data && nextProps.data.data != nextState.data){
            if(nextProps.data.errorCode === 401){
                setTimeout(()=>{
                    nextProps.history.push("/login");
                    nextProps.hideApiErrorMessage();
                }, 3000)

                return null;
            }
            return {
                data: nextProps.data.data, 
                showMsg: true
            }
        }

        return null;
    }



    onClose = ()=>{
       // this.setState({showMsg: false});
       this.props.hideApiErrorMessage();
        if(this.props.data.errorCode === 401){
           this.props.history.push("/login");
        }
    }

    render(){
        let errorMsg = this.state.data?this.state.data.Message:"";
        return(
            <Modal show={this.props.showError}>
                <Modal.Header>
                    <Modal.Title>Error Occurred</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>
                     {errorMsg}<br/>
                     {
                         this.props.data && this.props.data.errorCode === 401 && 
                         <span>Redirecting to login page...</span>
                     }
                </Modal.Body>
    
                <Modal.Footer>
                    <Button onClick={this.onClose}>Close</Button>
                </Modal.Footer>
           </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        hideApiErrorMessage
    }, dispatch)
}

const mapStateToProps = (state)=>{
    return{
        data: state.apiErrorData.error,
        showError: state.apiErrorData.showError
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(APIErrorsAlert));