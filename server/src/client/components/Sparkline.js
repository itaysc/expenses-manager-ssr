import React, {Component, Fragment} from 'react';
import { Sparklines, SparklinesBars  } from 'react-sparklines';
import PropTypes from 'prop-types';
export default class Sparkline extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        type: PropTypes.string
    }

    render(){
        return (
            <Fragment>
                 <span>hello</span>
                 <Sparklines data={[5, 10, 5, 20, 8, 15]} >
                </Sparklines>
            </Fragment>
        )
    }
}