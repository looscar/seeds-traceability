import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';

// Actions =>

// Assets:


// Components:
import Input from '@Shared/Input';
import Checkbox from '@Shared/Checkbox';
import Button from '@Shared/Button';

// Icons
import { IoEyeOffSharp } from "react-icons/io5";

// Router
import { useNavigate } from 'react-router-dom';

const Form = ({ }) => {
    const navigate = useNavigate();

    // Form validation schema:
    const YupSchema = Yup.object().shape({
        username: Yup.string()
          .required('Es necesario indicar un email o celular.'),
        password: Yup.string()
          .required('Es necesario indicar una contraseña válida.')
    });

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={YupSchema}
            onSubmit={(values,  {setSubmitting}) =>{
                navigate('/home');
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
            }) => (
                <div id="client-form">
                    <h1>Cliente o Lote</h1>
                    <Input
                        label      = {'Nombre para identificar a este cliente o lote:'}
                        placeholder= {'Nombre cliente/lote'}
                        name       = {'client'}
                        values     = {values}
                        onChange   = {handleChange}
                        onFocus    = {handleBlur}
                        errors     = {errors}
                        touched    = {touched}
                    />

                    <Input
                        label           = {'Contraseña'}
                        placeholder     = {'Contraseña:'}
                        name            = {'password'}
                        type            = {'password'}
                        values          = {values}
                        onChange        = {handleChange}
                        errors          = {errors}
                        onFocus         = {handleBlur}
                        touched         = {touched}
                        icon            = {<IoEyeOffSharp size={21} color={'#6C6C6C'}/>}
                    />
                    <Checkbox text={'Recordar mis datos de inicio de sesión'}/>
                    <div className='button-holder'>
                        <Button onClick={handleSubmit} variant={'red'}>Guardar cliente y procesar archvio .csv</Button>
                    </div>
                </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(Form);
