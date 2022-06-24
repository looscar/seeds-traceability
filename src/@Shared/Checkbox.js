import React, { useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>

// Icons
import { IoCheckmarkSharp } from "react-icons/io5";

const Checkbox = ({ ...props }) => {
    const [checked, setChecked] = useState(false);
    const checkStyle = (checked) ? 'custom-checkbox checked' : 'custom-checkbox';
    return (
        <label className={checkStyle} onClick={() => setChecked(!checked)}>
            <div className='chkbox'>
                <IoCheckmarkSharp
                    size={21}
                    color={'#FFFFFF'}
                />
            </div>
            <span>{props.text}</span>
        </label>
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

export default connect(mapStateToProps, matchDispatchToProps)(Checkbox);
