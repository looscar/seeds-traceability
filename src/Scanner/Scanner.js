import React, { useEffect, useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Template from '@Src/Global/Template';
import Button from '@Shared/Button';
import Loading from '@Shared/Loading';
import Empty from '@Shared/Empty';
import Subheader from '@Shared/Subheader/Subheader';
import Form from '@Src/Scanner/Form';
import Client from '@Src/Scanner/Client';
import Grid from '@Src/Scanner/Grid';

// Routing:
import { useNavigate, useParams } from 'react-router-dom';

// Actions =>
import { db } from '@Src/Global/DB';

const Scanner = ({ }) => {
    const navigate = useNavigate();
    const params = useParams();
    const [records, setRecords] = useState(false);
    const [read, setRead] = useState(document.querySelectorAll('.tr.isread').length);
    const [pending, setPending] = useState(document.querySelectorAll('.tbody .tr:not(.isread)').length);

    useEffect(() => {
        // Obtenemos records del cliente especificado por parámetro:
        db.__records__.where({'cliente' :  params.cliente}).toArray().then((res) => {
            setRecords(res);
        });
    }, []);


    const callBack = (res) => {
        setRecords(res);
        setRead(document.querySelectorAll('.tr.isread').length);
        setPending(document.querySelectorAll('.tbody .tr:not(.isread)').length);
    }


    return (
        <Template>
            <div id="section">
                <div className='left-side'>
                    <Subheader variant={'only-back'}/>
                    <Client/>
                    <Grid records={records} proceso={params.proceso.toLowerCase()}/>
                </div>
                <div className='right-side'>
                    {records ?
                        records.length > 0 ?
                            <React.Fragment>
                                <Form callBack={callBack} records={records}/>
                                <div className='padded-block'>
                                    <div className={'flex-row'}>
                                        <label>Proceso Actual</label>
                                        <span>Desgrane</span>
                                    </div>
                                    <div className={'flex-row'}>
                                        <label>IDs Totales:</label>
                                        <span>{records.length}</span>
                                    </div>
                                    <div className={'flex-row'}>
                                        <label>IDs Leídos:</label>
                                        <span>{read}</span>
                                    </div>
                                    <div className={'flex-row'}>
                                        <label>IDs por leer</label>
                                        <span>{pending}</span>
                                    </div>
                                    <div className={'btns-holder'}>
                                        <Button onClick={() => navigate(-1)} variant={'red-outline'}>Volver</Button>
                                    </div>
                                </div>
                            </React.Fragment>
                        : <Empty title={'--'}/>
                    : <Loading/> }
                </div>
            </div>
        </Template>
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

export default connect(mapStateToProps, matchDispatchToProps)(Scanner);
