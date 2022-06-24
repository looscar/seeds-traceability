import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>

// Router
import { Link } from 'react-router-dom';

// Assets:
import Logo from '@Assets/logo.webp';

// Icons:
import { FaRegUser } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";

const Header = ({ }) => {
    useEffect(() => {

    },[]);

    return (
        <div id="header">
            <Link to={'/'} className={'logo-holder'}>
                <img src={Logo}/>
            </Link>
            <div className='user-card'>
                <div className='texts'>
                    <h2>Diego Mendizabal</h2>
                    <span>ADMINISTRADOR</span>
                </div>
                <div className='avatar-holder'>
                    <div className='avatar'>
                        <FaRegUser color={'#FFFFFF'} size={18}/>
                    </div>
                    <BsFillCaretDownFill color={'#6C6C6C'} size={14}/>
                </div>
            </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(Header);
