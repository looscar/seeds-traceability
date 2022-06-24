import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Button from '@Shared/Button';

// Icons:
import { FaUserAlt } from "react-icons/fa";

const Client = ({ }) => {
    return (
        <div className='client-card'>
            <div className={'box'}>
                <div className='col col-avatar'>
                    <div className='avatar-holder'>
                        <FaUserAlt size={18} color={'#AF013A'}/>
                    </div>
                </div>
                <div className='col col-info'>
                    <div className='flex-row'>
                        <label>Cliente</label>
                        <span>Agroindustrias Stark</span>
                    </div>
                    <div className='flex-row'>
                        <label>E-mail</label>
                        <span>tony@stark.com</span>
                    </div>
                    <div className='flex-row'>
                        <label>Teléfono:</label>
                        <span>12 34 56 78 90</span>
                    </div>
                </div>

                <div className='col col-folio'>
                    <div className='flex-row'>
                        <label>Códigos</label>
                        <span>1,234</span>
                    </div>
                </div>
            </div>

            {/*
            <div className='btns-holder'>
                <Button variant="red-outline">Buscar cliente</Button>
                <Button variant="red-outline">Nuevo cliente</Button>
            </div>
            */}
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

export default connect(mapStateToProps, matchDispatchToProps)(Client);
