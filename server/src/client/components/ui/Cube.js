import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';
import '../../style/ui.css';
function Cube(props){

    const style = {
        width: props.width, height: props.height, 
        backgroundColor:props.backColor,
        fontSize:props.fontSize
    }
    return(
        <Jumbotron style={style} className='cube'>
            <div className="pull-left">
                {props.renderLeft()}
            </div>
            <div className="pull-right">
                {props.renderRight()}
            </div>
        </Jumbotron>
    )
}

Cube.propTypes = {
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    backColor: PropTypes.string,
    fontSize: PropTypes.string
}

Cube.defaultProps = {
    renderLeft: ()=>null,
    renderRight: ()=>null,
    width: "130px",
    height: "25px",
    backColor: "#fff",
    fontSize:"12px"
}

export default Cube;