import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Summary({value}) {
    return (
        <div>Total Count: {value}</div>
    );
}

Summary.PropTypes = {
    value: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    let sum = 0;
    for (const key in state.counter) {
        if (state.counter.hasOwnProperty(key)) {
            sum += state.counter[key];
        }
    }
    return {value: sum};
}


export default connect(mapStateToProps)(Summary);