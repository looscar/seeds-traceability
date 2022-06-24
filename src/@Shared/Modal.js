import React, { useEffect, useRef } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import {setModal} from '@Src/Global/Actions';

// Components =>

const Modal = ({ setModal, global: { modal } }) => {
    let overlayRef = useRef(null);

    const handlOverlayClick = (e) => {
        if(e.target === overlayRef.current){
            setModal(false);
        }
    }

    return (
        <div id="modal" ref={overlayRef} onClick={handlOverlayClick}>
            <div className='modal-content'>{modal}</div>
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
        setModal,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
