import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Assets
import Gif from '@Assets/loading.gif';

const Loading = ({ }) => {
    return (
        <div id="loading">
            <img src={Gif}/>
        </div>
    );
};

// mapStateToProps =>
function mapStateToProps(state){
    return state;
}

// Bind actions to be used along redux =>
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        // Actions
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Loading);
