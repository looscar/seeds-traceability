import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Button from '@Shared/Button';

// Icons
import { BsCalendar4Range } from 'react-icons/bs';
import { TiFlowSwitch } from 'react-icons/ti';
import { TiGroupOutline } from 'react-icons/ti';
import { VscClose } from 'react-icons/vsc';
import { SiMicrosoftexcel } from 'react-icons/si';

const Filters = ({ }) => {
    return (
        <div id="filters">
            <span>125 resultados</span>
            <span>3 seleccionados <VscClose size= {18}/></span>
            <Button variant={'tool active'} onClick={() => false }>
                <BsCalendar4Range color= {'#007FC7'} size= {18}/> Periodo
            </Button>
            <Button variant={'tool active'} onClick={() => false }>
                <TiGroupOutline color= {'#007FC7'} size= {18}/> Cliente/Lote
            </Button>
            <Button variant={'tool active'} onClick={() => false }>
                <TiFlowSwitch color= {'#007FC7'} size= {18}/> Proceso
            </Button>
            <Button variant={'tool active'} onClick={() => false }>
                <SiMicrosoftexcel color= {'#007FC7'} size= {18}/> Exportar
            </Button>
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

export default connect(mapStateToProps, matchDispatchToProps)(Filters);
