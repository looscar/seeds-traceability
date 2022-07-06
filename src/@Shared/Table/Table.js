import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions
import { UUID } from '@Src/Global/Actions';

const Table = ({ ...config }) => {
    let val;
    return (
        <div className='table'>
            <div className='thead'>
                <div className='tr'>
                    {config.headers.map((th) => {
                        return (
                            <div key={UUID()} className='th' style={{ width: th.size }}>{th.label}</div>
                        )
                    })}
                </div>
            </div>
            <div className='tbody'>
                {config.rows.map((row) => {
                    return (
                        <div key={UUID()} className='tr'>
                            {Object.keys(row).map((col, index) => {
                                val = row[config.headers[index].key];
                                return (
                                    <div key={UUID()} className='td' style={{ width: config.headers[index].size }}>
                                        {val}
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
