// DB
import { db } from '@Src/Global/DB';

// Crypt
import { Decrypt } from '@Src/Global/Actions';

export function logIn(values){
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            db.__auth__.where({'username' : values.username}).first().then((res) => {
                if(!res){
                    reject('El usuario proporcionado no coincide con nuestras bases de datos');
                } else {
                    if(Decrypt(res.password) === values.password){
                        dispatch({
                            type : 'MERGE-GLOBAL-STATES',
                            payload : {
                                auth : res,
                            }
                        });
                        localStorage.setItem('auth', JSON.stringify(res));

                        resolve();
                    } else {
                        reject('Lo sentimos, la contraseña no coincide con nuestras bases de datos');
                    }
                }
            });
        });
    }
}



export function logOut(){
    return (dispatch) => {
        dispatch({
            type : 'MERGE-GLOBAL-STATES',
            payload : {
                auth : false,
            }
        });
        localStorage.removeItem('auth');
    }
}