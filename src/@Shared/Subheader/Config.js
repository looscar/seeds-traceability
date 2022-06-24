import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import { switchHomeType } from '@Src/Home/Actions';

// Components =>
import {BiCog} from 'react-icons/bi';


const Config = ({ switchHomeType }) => {
    return (
        <button type="button" className='config-button' onClick={switchHomeType}>
            <BiCog size={42} color={'#007FC7'}/>
        </button>
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
        switchHomeType,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Config);
