import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>

// Components =>
import Template from '@Src/Global/Template';
import Checkbox from '@Shared/Checkbox';
import Button from '@Shared/Button';
import Subheader from '@Shared/Subheader/Subheader';
import Form from '@Src/Scanner/Form';
import Delivery from '@Src/Scanner/Delivery';
import Client from '@Src/Scanner/Client';
import Grid from '@Src/Scanner/Grid';
import { useNavigate } from 'react-router-dom';

const Scanner = ({ }) => {
    const navigate = useNavigate();
    return (
        <Template>
            <div id="section">
                <div className='left-side'>
                    <Subheader variant={'only-back'}/>
                    <Client/>
                    <Grid/>
                </div>
                <div className='right-side'>
                    <Form/>

                    {/*
                    <div className='padded-block'>
                        <div className={'flex-row'}>
                            <label>Descuento de acero</label>
                            <span>20.0%</span>
                        </div>
                    </div>

                    <div className={'motivation'}>
                        <label>Información para cliente</label>
                        <p>Por 1 piezas más alcanza un 25.0% y 25.0% de descuento.</p>
                    </div>

                    <div className='padded-block'>
                        <div className={'flex-row'}>
                            <label>Total piezas</label>
                            <span>27</span>
                        </div>
                        <div className={'flex-row'}>
                            <label>Total precio:</label>
                            <span>$2,350</span>
                        </div>
                        <div className={'flex-row'}>
                            <label>Total descuento:</label>
                            <span>$250.00</span>
                        </div>
                        <div className={'flex-row'}>
                            <label>Envío:</label>
                            <span>$0.00</span>
                        </div>
                        <div className={'flex-row'}>
                            <label>Total a pagar:</label>
                            <span>$1,685.00</span>
                        </div>

                        <Delivery/>

                        <Checkbox text={'Es una cotización'}/>
                        <Checkbox text={'Es un apartado'}/>

                        <div className={'btns-holder'}>
                            <Button onClick={() => navigate('/payment')} variant={'red'}>Cobrar venta</Button>
                            <Button variant={'red-outline'}>Descartar venta</Button>
                        </div>
                    </div>
                    */}
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
