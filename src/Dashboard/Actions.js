// DB
import { db } from '@Src/Global/DB';

export function getRecords(){
    return (dispatch) => {
        dispatch({
            type : 'MERGE-DASHBOARD-STATES',
            payload : {
                'records' : false,
            }
        });
        db.__records__.toArray().then((res) => {
            setTimeout(() => {
                dispatch({
                    type : 'MERGE-DASHBOARD-STATES',
                    payload : {
                        'records' : res,
                    }
                });
            }, 1000);
        });
    }
}