import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Section from '@Shared/Subheader/Section';
import Config from '@Shared/Subheader/Config';
import Back from '@Shared/Subheader/Back';
import Button from '@Shared/Button';

// Icons:
import { MdQrCodeScanner } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import {MdOutlineDashboard} from 'react-icons/md';

// Router
import { useNavigate } from 'react-router-dom';

const Subheader = ({ variant,  home: { type }, global: { auth } }) => {
    const navigate = useNavigate();

    return (
        <div id="subheader" className={variant}>
            {!variant ?
                <React.Fragment>
                    <Section/>
                    {type === 'dashboard' && auth.profile === 'admin' ?
                        <div className='start-sale-holder'>
                            <Button onClick={() => navigate('/scanner') }><MdQrCodeScanner/> Iniciar Escáner</Button>
                            <Button onClick={() => false }><BiUserPlus size={24}/> Registrar nuevo Cliente/Lote</Button>
                        </div>
                    : null }
                </React.Fragment>
            : null }
            {variant === 'with-back' ?
                <React.Fragment>
                    <Back/>
                    <Section/>
                </React.Fragment>
            : null }
            {variant === 'only-back' ?
                <React.Fragment>
                    <Back/>
                </React.Fragment>
            : null }
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

export default connect(mapStateToProps, matchDispatchToProps)(Subheader);
