import update from 'immutability-helper';

export const global = (state = {
    'auth'     : {'profile' : 'admin'},
    'route'    : '',
    'modal'    : false,
    'sidepanel': false,
}, action) => {
    switch (action.type) {
		case 'MERGE-GLOBAL-STATES':
			state = update(state, {$merge: action.payload});
		break;

        default:
            return state;
    }

    return state;
};