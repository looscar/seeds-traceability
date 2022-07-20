import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions
import { UUID } from '@Src/Global/Actions';

const Table = ({ ...config }) => {
    let val;
    let isread;
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
                    isread = '';
                    if(config['proceso'] && row[config['proceso']]){
                        isread = ' isread';
                    }
                    return (
                        <div key={UUID()} className={'tr' + isread}>
                            {config.headers.map((h) => {
                                val = row[h.key];
                                return (
                                    <div key={UUID()} className='td' style={{ width: h.size }}>
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
