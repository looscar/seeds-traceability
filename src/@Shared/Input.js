import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Components

// Assets
import { FiCheck } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Input = ({ ...config }) => {
    let statusIcon  =  null;
    let inputStyles = 'custom-input';
    if(config.errors[config.name] && config.touched[config.name]){
        inputStyles = 'custom-input error';
        statusIcon = <IoCloseOutline color={'#CF0043'} size={18}/>;
    }
    if(!config.errors[config.name] && config.touched[config.name]){
        inputStyles = 'custom-input success';
        statusIcon = <FiCheck color={'#2B8519'} size={18}/>;
    }
    return (
        <fieldset className={inputStyles}>
            {config.label ? <label>{config.label}</label> : null }
            <div className="field-wrapper">
                <input {...config} value={config.values[config.name]}/>
                {config.icon && statusIcon === null ? config.icon : statusIcon}
            </div>
        </fieldset>
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

export default connect(mapStateToProps, matchDispatchToProps)(Input);
