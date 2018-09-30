import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

function CubesContainer(props){
    return (
        <div className="cubeContainer">
        {
            props.renderCubes("cubeItem")
        }

        </div>
    );
}

CubesContainer.propTypes = {
    cubes: PropTypes.array
}

CubesContainer.defaultProps = {
    cubes: []
}

export default CubesContainer;