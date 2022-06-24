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
                    {'label' : '', 'size' : '3%'},
                    {'label' : 'ID Surco', 'size' : '7%'},
                    {'label' : 'Año', 'size' : '5%'},
                    {'label' : 'Parcela', 'size' : '5%'},
                    {'label' : 'Coordenadas', 'size' : '7.5%'},
                    {'label' : 'Longitud', 'size' : '7.5%'},
                    {'label' : 'F. Siembra', 'size' : '7.5%'},
                    {'label' : 'Macho/Hembra/Línea', 'size' : '12.5%'},
                    {'label' : 'T. Material', 'size' : '10%'},
                    {'label' : 'T. Cosecha', 'size' : '10%'},
                    {'label' : 'Desgrane', 'size' : '7.5%'},
                    {'label' : 'Humedad', 'size' : '7.5%'},
                    {'label' : 'Peso', 'size' : '5%'},
                    {'label' : 'Empaquetado', 'size' : '5%'},
                ]}
                rows={Array(100).fill(
                    [
                        <GrCheckbox size={16}/>,
                        'S-123-ABC',
                        '2022',
                        'P1',
                        '12345,67890',
                        '1.5m',
                        '30/Jun/22',
                        'M/H/L',
                        'Material',
                        'Cosecha',
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
