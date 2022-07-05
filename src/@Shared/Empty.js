import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Assets
import Icon from '@Assets/empty-box.gif';

// Actions =>

// Components =>

const Empty = ({ title='Sin título' }) => {
    return (
        <div id="empty">
            <h1>{title}</h1>
            <img src={Icon}/>
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

export default connect(mapStateToProps, matchDispatchToProps)(Empty);
