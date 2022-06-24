export function switchHomeType(){
    return (dispatch, getState) => {
        let state = getState();
        let { type } = state.home;
        let ntype = 'dahboard';

        if(type === 'opening'){
            ntype = 'closure';
        }

        if(type === 'closure'){
            ntype = 'dashboard';
        }

        if(type === 'dashboard'){
            ntype = 'opening';
        }

        dispatch({
            type : 'MERGE-HOME-STATES',
            payload : {
                'type' : ntype,
            }
        });
    }
}