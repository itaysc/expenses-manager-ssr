import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import '../style/bootstrap.min.css';
class APIErrorsAlert extends Component{
    constructor(props){
        super(props);
        this.state={
            showMsg: false,
            error:{data:{Message:""}}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data && nextProps.data != this.state.data){
            this.setState({error: nextProps.data, showMsg: true});
        }
    }

    onClose = ()=>{
        this.setState({showMsg: false});
    }

    render(){
        let errorMsg = this.state.error && this.state.error.data?this.state.error.data.Message:"";
        return(
            <Modal show={this.state.showMsg}>
                <Modal.Header>
                    <Modal.Title>Error Occurred</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>{errorMsg}</Modal.Body>
    
                <Modal.Footer>
                    <Button onClick={this.onClose}>Close</Button>
                </Modal.Footer>
           </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        data: state.apiErrorData
    }
}

export default connect(mapStateToProps)(APIErrorsAlert);