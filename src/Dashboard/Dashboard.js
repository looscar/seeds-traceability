import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import { setModal } from '@Src/Global/Actions';

// Components =>
import Template from '@Src/Global/Template';
import Subheader from '@Shared/Subheader/Subheader';
import Grid from '@Src/Dashboard/Grid';
import Filters from '@Src/Dashboard/Filters';
import Button from '@Shared/Button';
import ClientForm from '@Src/Client/Form';

// Icons:
import { MdQrCodeScanner } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";

// Routing
import { useNavigate } from 'react-router-dom';

const Sale = ({ setModal, global: { auth } }) => {
    const navigate = useNavigate();
    return (
        <Template>
            <div id="section">
                <div className='left-side'>
                    <Subheader>
                        <div className='start-sale-holder'>
                            <Button variant={'red-outline'} onClick={() => navigate('/scanner') }><MdQrCodeScanner/> Iniciar Escáner</Button>
                            <Button variant={'red-outline'} onClick={() => setModal(<ClientForm/>) }><BiUserPlus size={24}/> Registrar nuevo Cliente/Lote</Button>
                        </div>
                    </Subheader>
                    <Filters/>
                    <Grid/>
                </div>
            </div>
        </Template>
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
        setModal,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sale);
