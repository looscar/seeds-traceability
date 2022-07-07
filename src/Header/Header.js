import React, { useEffect, useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Router
import { Link } from 'react-router-dom';

// Assets:
import Logo from '@Assets/logo.webp';

// Icons:
import { FaRegUser } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

// Actions
import {logOut} from '@Src/Login/Actions';

const Header = ({ global: { auth }, logOut }) => {
    const [menu, setMenu] = useState(false);

    return (
        <div id="header">
            <Link to={'/'} className={'logo-holder'}>
                <img src={Logo}/>
            </Link>
            <div className='user-card'>
                <div className='texts'>
                    <h2>{auth.firstname} {auth.lastname}</h2>
                    <span>{(auth.profile === 'admin') ? 'ADMINISTRADOR' : 'OPERADOR'}</span>
                </div>
                <div className='avatar-holder' onClick={() => setMenu(!menu) }>
                    <div className='avatar'>
                        <FaRegUser color={'#FFFFFF'} size={18}/>
                    </div>
                    <BsFillCaretDownFill color={'#6C6C6C'} size={14}/>

                    {menu ?
                        <div className='account-menu'>
                            <button onClick={logOut} type="button"><AiOutlineLogout color={'#fc0052'} size={18}/> Cerrar sesión</button>
                        </div>
                    : null }
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
        logOut,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
