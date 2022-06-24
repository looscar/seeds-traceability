import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Dashboard from '@Src/Dashboard/Dashboard';

const Home = ({ global: { auth } }) => {
    return (
        auth.profile === 'admin' ? <Dashboard/> : <b>Panel de operador</b>
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

export default connect(mapStateToProps, matchDispatchToProps)(Home);
