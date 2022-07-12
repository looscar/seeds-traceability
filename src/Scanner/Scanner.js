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
    useEffect(() => {
        // Obtenemos records del cliente especificado por parámetro:
        db.__records__.where({'cliente' :  params.cliente}).toArray().then((res) => {
            setRecords(res);
        });
    }, []);


    return (
        <Template>
            <div id="section">
                <div className='left-side'>
                    <Subheader variant={'only-back'}/>
                    <Client/>
                    <Grid records={records}/>
                </div>
                <div className='right-side'>
                    {records ?
                        records.length > 0 ?
                            <React.Fragment>
                                <Form/>
                                <div className='padded-block'>

                                    <div className={'flex-row'}>
                                        <label>Proceso Actual</label>
                                        <span>Desgrane</span>
                                    </div>
                                    <div className={'flex-row'}>
                                        <label>Códigos Leídos:</label>
                                        <span>348</span>
                                    </div>
                                    <div className={'flex-row'}>
                                        <label>Códigos por leer</label>
                                        <span>899</span>
                                    </div>

                                    {/*
                                    <Delivery/>

                                    <Checkbox text={'Es una cotización'}/>
                                    <Checkbox text={'Es un apartado'}/>
                                    */}

                                    <div className={'btns-holder'}>
                                        <Button onClick={() => navigate(-1)} variant={'red'}>Concluir por hoy</Button>
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
