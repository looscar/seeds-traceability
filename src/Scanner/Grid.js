import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Table from '@Shared/Table/Table';

// Icons
import { GrCheckbox } from 'react-icons/gr';

// Router
import { Link } from 'react-router-dom';

const Grid = ({ }) => {

    return (
        <div className='table-holder'>
            <Table
                headers={[
                    {'label' : '', 'size' : '10%'},
                    {'label' : 'ID Surco', 'size' : '20%'},
                    {'label' : 'Parcela', 'size' : '10%'},
                    {'label' : 'F. Siembra', 'size' : '20%'},
                    {'label' : 'Desgrane', 'size' : '10%'},
                    {'label' : 'Humedad', 'size' : '10%'},
                    {'label' : 'Peso', 'size' : '10%'},
                    {'label' : 'Empaquetado', 'size' : '10%'},
                ]}
                rows={Array(100).fill(
                    [
                        <GrCheckbox size={16}/>,
                        'S-123-ABC',
                        'P1',
                        '30/Jun/22',
                        'D1',
                        '0.12',
                        '112g',
                        '#12',
                    ]
                )}
            />
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

export default connect(mapStateToProps, matchDispatchToProps)(Grid);
