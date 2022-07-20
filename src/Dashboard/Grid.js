import React, { useEffect, useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import { getRecords } from '@Src/Dashboard/Actions';

// Components =>
import Table from '@Shared/Table/Table';
import Empty from '@Shared/Empty';
import Loading from '@Shared/Loading';

const Grid = ({ getRecords, dashboard: { records }}) => {

    useEffect(() => {
        getRecords();
    }, []);

    const colSize = (100 / 16);

    return (
        <div className='table-holder'>
            {!records ?
                <Loading/>
            :
                records.length === 0 ?
                    <Empty title={'Aún no existen registros en base de datos.'}/>
                :
                    <Table
                        headers={[
                            {'key': 'id', 'label' : 'ID', 'size' : colSize+'%'},
                            {'key': 'año', 'label' : 'Año', 'size' : colSize+'%'},
                            {'key': 'parcela', 'label' : 'Parcela', 'size' : colSize+'%'},
                            {'key': 'seccion', 'label' : 'Sección', 'size' : colSize+'%'},
                            {'key': 'servicio', 'label' : 'Servicio', 'size' : colSize+'%'},
                            {'key': 'coordenadas', 'label' : 'Coordenadas', 'size' : colSize+'%'},
                            {'key': 'mhl', 'label' : 'M/H/L', 'size' : colSize+'%'},
                            {'key': 'nbk', 'label' : 'NB K', 'size' : colSize+'%'},
                            {'key': 'longitud', 'label' : 'Longitud', 'size' : colSize+'%'},
                            {'key': 'siembra', 'label' : 'F. Siembra', 'size' : colSize+'%'},
                            {'key': 'bolsas', 'label' : 'Bolsas Macho', 'size' : colSize+'%'},
                            {'key': 'cosecha', 'label' : 'Cosecha', 'size' : colSize+'%'},
                            {'key': 'desgrane', 'label' : 'Desgrane', 'size' : colSize+'%'},
                            {'key': 'humedad', 'label' : 'Humedad', 'size' : colSize+'%'},
                            {'key': 'peso', 'label' : 'Peso', 'size' : colSize+'%'},
                            {'key': 'empaquetado', 'label' : 'Empaquetado', 'size' : colSize+'%'},
                        ]}
                        rows={records}
                    />
            }
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
        getRecords,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Grid);
