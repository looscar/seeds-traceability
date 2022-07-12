import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Section from '@Shared/Subheader/Section';
import Back from '@Shared/Subheader/Back';


// Router
import { useNavigate } from 'react-router-dom';

const Subheader = ({ variant, children, title = 'Reportes' }) => {
    const navigate = useNavigate();

    return (
        <div id="subheader" className={variant}>
            {!variant ?
                <React.Fragment>
                    <Section title={title}/>
                    {children}
                </React.Fragment>
            : null }
            {variant === 'with-back' ?
                <React.Fragment>
                    <Back/>
                    <Section/>
                </React.Fragment>
            : null }
            {variant === 'only-back' ?
                <React.Fragment>
                    <Back/>
                </React.Fragment>
            : null }
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

export default connect(mapStateToProps, matchDispatchToProps)(Subheader);
