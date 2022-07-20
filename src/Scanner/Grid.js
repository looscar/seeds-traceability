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

const Grid = ({ records, proceso }) => {

    const colSize = (100 / 7);

    return (
        <div className='table-holder'>
            {records  ?
                records.length > 0 ?
                    <Table
                        headers={[
                            {'key': 'id', 'label' : 'ID Surco', 'size' : colSize+'%'},
                            {'key': 'parcela', 'label' : 'Parcela', 'size' : colSize+'%'},
                            {'key': 'siembra', 'label' : 'F. Siembra', 'size' : colSize+'%'},
                            {'key': 'desgrane', 'label' : 'Desgrane', 'size' : colSize+'%'},
                            {'key': 'humedad', 'label' : 'Humedad', 'size' : colSize+'%'},
                            {'key': 'peso', 'label' : 'Peso', 'size' : colSize+'%'},
                            {'key': 'empaquetado', 'label' : 'Empaquetado', 'size' : colSize+'%'},
                        ]}
                        rows={records}
                        proceso={proceso}
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
