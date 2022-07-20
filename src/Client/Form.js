import React, { useState } from 'react';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';

// Actions
import { setModal } from '@Src/Global/Actions';
import { getRecords } from '@Src/Dashboard/Actions';

// DB
import { db } from '@Src/Global/DB';

// Toastify:
import { toast } from "react-toastify";

// Components:
import Input from '@Shared/Input';
import File from '@Shared/File';
import Button from '@Shared/Button';
import Checkbox from '@Shared/Checkbox';

// Icons
import { SiMicrosoftexcel } from 'react-icons/si';


const Form = ({ setModal, getRecords }) => {
    const [tsv, setTSV] = useState(false);
    const cols = [
        'id',
        'año',
        'parcela',
        'seccion',
        'surco',
        'servicio',
        'coordenadas',
        'mhl',
        'nbk',
        'longitud',
        'siembra',
        'eg',
        'bolsas',
        'cosecha',
        'desgrane',
        'humedad',
        'peso',
        'empaquetado',
    ];


    // Handle TSV
    const handleTSV = (e) => {
        var input = e.target;
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            let data = e.target.result; // Data as it is from TSV file
            let rows = data.split("\n"); // Take data and split it in new lines, hence get rows....
            let error = false;

            // Make sure it has more than 1 row:
            if(rows.length < 2){
                toast.warn(`El archivo TSV no parece contener información. (Se detectaron ${rows.length - 1} filas)`);
                error = true;
            }

            // Make sure each row has the correct number of columns:
            let colsCount = rows[0].split('\t').length;

            if(!error && colsCount !== cols.length){
                toast.warn(`El archivo TSV no cuenta con el número aprobado de columnas (${cols.length}) por fila.`);
                error = true;
            }

            // Resolution:
            if(error){
                input.value = '';
            } else {
                setTSV(rows);
            }
        };
        // Trigger file reading as text
        reader.readAsText(file);
        // Trigger file reading as binary...
        //reader.readAsBinaryString(file); <= Esto causaba errores de condificación
    };


    // Formik validation schema:
    const YupSchema = Yup.object().shape({
        client: Yup.string().required(' '),
        tsv: Yup.string().required(' ')
    });

    return (
        <Formik
            initialValues={{
                client: '',
                tsv: '',
            }}
            validationSchema={YupSchema}
            onSubmit={(values,  {setSubmitting}) =>{
                //setSubmitting(true);
                let bulkData = [];
                let vals;
                let obj;
                tsv.forEach((row, i) => {
                    obj = {};
                    // Skip headers in 1st row
                    if(i > 0){
                        vals = row.split('\t');
                        cols.forEach((col, idx) => {
                            obj[col] = vals[idx].replace(/\"/g,'');
                        });

                        // Custom fields:
                        obj.lastmodified = Date.now();
                        obj.cliente = values.client;

                        // Remove columns we dont want to overwritte:
                        delete obj.desgrane;
                        delete obj.humedad;
                        delete obj.peso;
                        delete obj.empaquetado;

                        bulkData.push(obj);
                    }
                });

                db.__records__.bulkPut(bulkData).then(function(lastKey) {
                    toast.success(`El archivo con ${bulkData.length} filas ha sido procesado y almacenado correctamente.`);
                    setModal(false);
                    getRecords();
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
                isSubmitting,
                isValid,
                dirty,
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

                    <File
                        label           = {'Archivo .tsv'}
                        name            = {'tsv'}
                        accept          = {'.tsv'}
                        values          = {values}
                        onChange        = {(e) => {
                            handleChange("tsv")(e);
                            handleTSV(e);
                        }}
                        errors          = {errors}
                        onFocus         = {handleBlur}
                        touched         = {touched}
                        icon            = {<SiMicrosoftexcel color= {'#007FC7'} size= {18}/>}
                    />

                    {/*<Checkbox text="Sobreescribir información (no sobreescribe información de procesos)"/>*/}

                    {(isValid && dirty) ?
                        !isSubmitting ?
                            <div className='button-holder'>
                                <Button onClick={handleSubmit} variant={'red'}>Guardar cliente y procesar archvio .tsv</Button>
                            </div>
                        :
                            'Procesando...'
                    : null }
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
        setModal,
        getRecords,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form);
