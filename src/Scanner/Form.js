import React, { useEffect } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';

// Actions =>


// Components:
import Input from '@Shared/Input';
import Button from '@Shared/Button';


// Router
import { useNavigate } from 'react-router-dom';

const Scanner = ({ }) => {
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
                <div className={'product-scanner'}>
                    <Input
                        label      = {'Ingresar código:'}
                        placeholder= {'ej.MON193'}
                        name       = {'username'}
                        values     = {values}
                        onChange   = {handleChange}
                        onFocus    = {handleBlur}
                        errors     = {errors}
                        touched    = {touched}
                    />
                    <Button onClick={handleSubmit} variant={'red-outline'}>Marcar como leído</Button>
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

export default connect(mapStateToProps, matchDispatchToProps)(Scanner);
