import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Routing:
import { useNavigate } from "react-router-dom";

// Components =>

// Icons:
import { BiArrowBack } from "react-icons/bi";

const Back = ({  }) => {
    const navigate = useNavigate();
    return (
        <button className='go-back' type="button" onClick={() => navigate(-1)}>
            <BiArrowBack color={'#007FC7'} size={21}/>
            <span>Volver</span>
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
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Back);
