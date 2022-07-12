import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Components =>
import Table from '@Shared/Table/Table';
import Loading from '@Shared/Loading';
import Empty from '@Shared/Empty';

// Icons
import { GrCheckbox } from 'react-icons/gr';

const Grid = ({ records }) => {
    return (
        <div className='table-holder'>
            {records  ?
                records.length > 0 ?
                    <Table
                        headers={[
                            {'key': 'id', 'label' : 'ID Surco', 'size' : '10%'},
                            {'key': 'parcela', 'label' : 'Parcela', 'size' : '20%'},
                            {'key': 'siembra', 'label' : 'F. Siembra', 'size' : '10%'},
                            {'key': 'desgrane', 'label' : 'Desgrane', 'size' : '20%'},
                            {'key': 'humedad', 'label' : 'Humedad', 'size' : '10%'},
                            {'key': 'peso', 'label' : 'Peso', 'size' : '10%'},
                            {'key': 'empaquetado', 'label' : 'Empaquetado', 'size' : '10%'},
                        ]}
                        rows={records}
                    />
                : <Empty title={'No se encontraron registros para este cliente'}/>
            : <Loading/>}
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
