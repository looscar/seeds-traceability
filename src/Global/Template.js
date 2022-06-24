import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Modal from '@Shared/Modal';
import Sidepanel from '@Shared/Sidepanel';
import Header from '@Src/Header/Header';
import Sidebar from '@Src/Sidebar/Sidebar';

const Template = ({ children, global: { modal, sidepanel } }) => {
    return (
        <React.Fragment>
            <div id="template">
                <Header/>
                <main>
                    <Sidebar/>
                    <section>
                        {children}
                    </section>
                </main>
            </div>
            {modal ? <Modal/> : null }
            {sidepanel ? <Sidepanel/> : null }
        </React.Fragment>
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

export default connect(mapStateToProps, matchDispatchToProps)(Template);
