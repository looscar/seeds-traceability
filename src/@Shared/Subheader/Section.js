import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Moment
import moment from 'moment';

// Icons
import {MdOutlineDashboard} from 'react-icons/md';

const Store = ({ title }) => {

    return (
        <div className='section-card'>
            <div className='section-row'>
                <MdOutlineDashboard color={'#FC0052'} size={24}/>
                <h2>{title}</h2>
            </div>
            <div className='section-row'>
                <span>{moment().format("LLLL")}</span>
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
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Store);
