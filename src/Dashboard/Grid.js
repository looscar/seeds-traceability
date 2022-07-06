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
                            {'key': 'id', 'label' : 'ID Surco', 'size' : '8%'},
                            {'key': 'año', 'label' : 'Año', 'size' : '5%'},
                            {'key': 'parcela', 'label' : 'Parcela', 'size' : '5%'},
                            {'key': 'coordenadas', 'label' : 'Coordenadas', 'size' : '12%'},
                            {'key': 'longitud', 'label' : 'Longitud', 'size' : '5%'},
                            {'key': 'siembra', 'label' : 'F. Siembra', 'size' : '7%'},
                            {'key': 'mhl', 'label' : 'M/H/L', 'size' : '5%'},
                            {'key': 'material', 'label' : 'T. Material', 'size' : '10%'},
                            {'key': 'cosecha', 'label' : 'T. Cosecha', 'size' : '10%'},
                            {'key': 'desgrane', 'label' : 'Desgrane', 'size' : '10%'},
                            {'key': 'humedad', 'label' : 'Humedad', 'size' : '10%'},
                            {'key': 'peso', 'label' : 'Peso', 'size' : '5%'},
                            {'key': 'empaquetado', 'label' : 'Empaquetado', 'size' : '8%'},
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
