// DB
import { db } from '@Src/Global/DB';

export function getRecords(){
    return (dispatch) => {
        db.__records__.toArray().then((res) => {
            dispatch({
                type : 'MERGE-DASHBOARD-STATES',
                payload : {
                    'records' : res,
                }
            });
        });
    }
}