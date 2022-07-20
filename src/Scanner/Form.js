import React from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';

// Actions =>
import { db } from '@Src/Global/DB';

// Components:
import Input from '@Shared/Input';
import Button from '@Shared/Button';
import Loading from '@Shared/Loading';


// Router
import { useParams } from 'react-router-dom';

const Scanner = ({ callBack }) => {
    const params = useParams();
    const codeRegex = /^[a-z]{1}[0-9]{2}-[0-9]{5}$/gmi;
    const proceso = params.proceso.toLowerCase();

    let YupSchema, initialValues;

    // Evaluates the process and define the Yup schema validation and second field:
    switch(proceso){
        case 'desgrane':
            // Form validation schema:
            YupSchema = Yup.object().shape({
                desgrane: Yup.number().min(1).max(10).required(),
                code: Yup.string().trim().matches(codeRegex, ' ').required(),
            });
            initialValues = {
                desgrane: 1,
                code: '',
            };
        break;

        case 'humedad':
            // Form validation schema:
            YupSchema = Yup.object().shape({
                humedad: Yup.string().required(),
                code: Yup.string().trim().matches(codeRegex, ' ').required(),
            });
            initialValues = {
                humedad: '',
                code: '',
            };
        break;

        case 'peso':
            // Form validation schema:
            YupSchema = Yup.object().shape({
                peso: Yup.string().required(),
                code: Yup.string().trim().matches(codeRegex, ' ').required(),
            });
            initialValues = {
                peso: '',
                code: '',
            };
        break;

        case 'empaquetado':
            // Form validation schema:
            YupSchema = Yup.object().shape({
                empaquetado: Yup.number().min(1).max(100).required(),
                code: Yup.string().trim().matches(codeRegex, ' ').required(),
            });
            initialValues = {
                empaquetado: 1,
                code: '',
            };
        break;

        default:
            // Nothing...
        break;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={YupSchema}
            onSubmit={(values,  { resetForm }) =>{
                // 0) Uodate record
                db.__records__.update(values.code, { [proceso] : values[proceso]}).then(() => {
                    // 1) Retrieve updated records and callBack():
                    db.__records__.where({'cliente' :  params.cliente}).toArray().then((res) => {
                        callBack(res);
                        resetForm();
                    });
                });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                submitForm,
                isSubmitting,
                isValid,
                dirty,
            }) => {
                if(isValid && dirty && !isSubmitting) {
                    submitForm();
                }
                return(
                    <div className={'product-scanner'}>
                        {!isSubmitting ?
                            <React.Fragment>
                                <div className='form-row'>
                                    {proceso === 'desgrane' ?
                                        <Input
                                            label       = {'Folio(s):'}
                                            placeholder = {'No. impresiones'}
                                            name        = {'desgrane'}
                                            values      = {values}
                                            type        = {'number'}
                                            min         = {1}
                                            max         = {10}
                                            onChange    = {handleChange}
                                            onFocus     = {handleBlur}
                                            errors      = {errors}
                                            touched     = {touched}
                                        />
                                    : null}

                                    {proceso === 'humedad' ?
                                        <Input
                                            label       = {'Humedad:'}
                                            placeholder = {'Humedad:'}
                                            name        = {'humedad'}
                                            values      = {values}
                                            type        = {'text'}
                                            min         = {1}
                                            max         = {10}
                                            onChange    = {handleChange}
                                            onFocus     = {handleBlur}
                                            errors      = {errors}
                                            touched     = {touched}
                                        />
                                    : null}

                                    {proceso === 'peso' ?
                                        <Input
                                            label       = {'Peso:'}
                                            placeholder = {'0.0g'}
                                            name        = {'peso'}
                                            values      = {values}
                                            type        = {'text'}
                                            min         = {1}
                                            max         = {10}
                                            onChange    = {handleChange}
                                            onFocus     = {handleBlur}
                                            errors      = {errors}
                                            touched     = {touched}
                                        />
                                    : null}

                                    {proceso === 'empaquetado' ?
                                        <Input
                                            label       = {'Empaquetado'}
                                            placeholder = {'No.'}
                                            name        = {'empaquetado'}
                                            values      = {values}
                                            type        = {'number'}
                                            min         = {1}
                                            max         = {10}
                                            onChange    = {handleChange}
                                            onFocus     = {handleBlur}
                                            errors      = {errors}
                                            touched     = {touched}
                                        />
                                    : null}

                                    <Input
                                        label      = {'Ingresar código:'}
                                        placeholder= {'ej. A11-00001'}
                                        name       = {'code'}
                                        values     = {values}
                                        onChange   = {handleChange}
                                        onFocus    = {handleBlur}
                                        errors     = {errors}
                                        touched    = {touched}
                                        id         = 'code'
                                    />
                                </div>
                                <Button onClick={handleSubmit} variant={'red'}>Marcar como leído</Button>
                            </React.Fragment>
                        : <Loading/> }
                    </div>
                )
            }}
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
