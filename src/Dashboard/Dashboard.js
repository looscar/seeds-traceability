import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Template from '@Src/Global/Template';
import Subheader from '@Shared/Subheader/Subheader';
import Grid from '@Src/Dashboard/Grid';
import Filters from '@Src/Dashboard/Filters';
import { useNavigate } from 'react-router-dom';

const Sale = ({ }) => {
    const navigate = useNavigate();
    return (
        <Template>
            <div id="section">
                <div className='left-side'>
                    <Subheader/>
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
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Sale);
