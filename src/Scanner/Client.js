import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>

// Icons:
import { FaUserAlt } from "react-icons/fa";

// Routing
import { useParams } from 'react-router-dom';

const Client = ({ }) => {
    const params = useParams();
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
                        <span>{params.cliente}</span>
                    </div>
                    <div className='flex-row'>
                        <label>Proceso</label>
                        <span>{params.proceso}</span>
                    </div>
                </div>

                <div className='col col-folio'>
                <div className='flex-row'>
                        <label>Fecha</label>
                        <span>11/07/2022</span>
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
