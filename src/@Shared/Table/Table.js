import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const Table = ({ ...config }) => {
    return (
        <div className='table'>
            <div className='thead'>
                <div className='tr'>
                    {config.headers.map((th) => {
                        return (
                            <div className='th' style={{ flexBasis: th.size }}>{th.label}</div>
                        )
                    })}
                </div>
            </div>
            <div className='tbody'>
                {config.rows.map((row) => {
                    return (
                        <div className='tr'>
                            {row.map((col, index) => {
                                return (
                                    <div className='td' style={{ flexBasis: config.headers[index].size }}>
                                        {col}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
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

export default connect(mapStateToProps, matchDispatchToProps)(Table);
