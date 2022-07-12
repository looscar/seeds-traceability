import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>

// Routing
import { Link } from 'react-router-dom';

// Icons
import { MdQrCodeScanner } from "react-icons/md";
import {MdOutlineTableView} from 'react-icons/md';


const Sidebar = ({ }) => {
    return (
        <nav id="sidebar">
            <Link to={'/'}>
                <MdOutlineTableView color={'#4F4E4E'} size={24}/>
            </Link>
            <Link to={'/scanner'}>
                <MdQrCodeScanner color={'#4F4E4E'} size={24}/>
            </Link>
        </nav>
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

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);
