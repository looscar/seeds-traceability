import React, { useEffect, useRef } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import { setSidePanel } from '@Src/Global/Actions';

// Components =>

const Sidepanel = ({ setSidePanel, global: { sidepanel } }) => {
    const panelRef = useRef(null);

    useEffect(() => {
        console.log('Sidepanel', sidepanel);
    }, []);

    const handleSidePanel = (e) => {
        if(e.target === panelRef.current){
            setSidePanel(false);
        }
    }
    return (
        <div id="side-panel" onClick={handleSidePanel} ref={panelRef}>
            <div className={'panel-content'}>
                <h1>Historial de edición</h1>
                <div className={'panel-overflow'}>
                    {sidepanel}
                </div>
            </div>
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
        setSidePanel,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidepanel);
