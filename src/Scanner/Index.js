import React, { useEffect, useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions =>
import { db } from '@Src/Global/DB';
import { UUID } from '@Src/Global/Actions';

// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components =>
import Template from '@Src/Global/Template';
import Subheader from '@Shared/Subheader/Subheader';
import Select from '@Shared/Select';
import Loading from '@Shared/Loading';
import Button from '@Shared/Button';

// Icons:
import { GiCorn } from 'react-icons/gi';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { GoPackage } from 'react-icons/go';

// Routing
import { useNavigate } from 'react-router-dom';

const Index = ({ }) => {
    const navigate = useNavigate();
    const [clients, setClients] = useState(false);

    useEffect(() => {
        let _clients = [];
        let exists;
        db.__records__.toArray().then((res) => {
            res.forEach((r) => {
                exists = _clients.some((c) => c.label === r.cliente);
                if(!exists){
                    _clients.push({
                        label: r.cliente,
                        value: r.cliente,
                    });
                }
            });

            console.log('Clients', _clients);

            setClients(_clients);
        });
    }, [])

    // Form validation schema:
    const YupSchema = Yup.object().shape({
        client: Yup.string().required(' '),
        process: Yup.string().required(' ')
    });


    const processes = [
        {
            'label' : 'Desgrane', 'icon' : {
                'default' : <GiCorn size= {20}/>,
                'success' : <GiCorn size= {20} color={'#157d36'}/>,
            },
        },
        {
            'label' : 'Humedad', 'icon' : {
                'default' : <WiHumidity size= {24}/>,
                'success' : <WiHumidity size= {24} color={'#157d36'}/>,
            },
        },
        {
            'label' : 'Peso', 'icon' : {
                'default' : <FaBalanceScaleLeft size= {20}/>,
                'success' : <FaBalanceScaleLeft size= {20} color={'#157d36'}/>,
            },
        },
        {
            'label' : 'Empaquetado', 'icon' : {
                'default' : <GoPackage size= {20}/>,
                'success' : <GoPackage size= {20} color={'#157d36'}/>,
            },
        },
    ];




    return (
        <Formik
            initialValues={{
                client: '',
                process: '',
            }}
            validationSchema={YupSchema}
            onSubmit={(values,  {setSubmitting, setFieldValue}) =>{
                navigate(`/scanner/${values.client}/${values.process}`)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                isValid,
                dirty,
            }) => (
                <Template>
                    <div id="before-scanner">
                        <Subheader title={'Selecciona el cliente y proceso para iniciar'}/>
                        {clients ?
                            <div className='flex-row'>
                                <Select
                                    label        = {'Seleccionar cliente'}
                                    name         = {'client'}
                                    values       = {values}
                                    onChange     = {handleChange}
                                    onFocus      = {handleBlur}
                                    errors       = {errors}
                                    touched      = {touched}
                                    options      = {clients}
                                />

                                <div className='process-selector'>
                                    <label>Sdeleccionar proceso:</label>
                                    <div className='process-btns'>
                                        {processes.map((p) => {
                                            let btnVariant = (p.label === values.process) ? 'tool active' : 'tool';
                                            let iconVariant = (p.label === values.process) ? 'success' : 'default';
                                            return <Button onClick={() => setFieldValue('process', p.label) } key={UUID()} variant={btnVariant}>{p.icon[iconVariant]} {p.label}</Button>;
                                        })}
                                    </div>
                                    <input type="hidden" readOnly name={'pocess'} value={values.process}/>
                                </div>

                                {(isValid && dirty) ? <Button variant={'red'} onClick={handleSubmit}>Comenzar a escanear</Button> : <Button>Comenzar a escanear</Button> }
                            </div>
                        : <Loading/> }
                    </div>
                </Template>
            )}
        </Formik>
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

export default connect(mapStateToProps, matchDispatchToProps)(Index);
