import update from 'immutability-helper';

export const home = (state = {
    'type'  : 'dashboard', // opening / closure / dashboard
}, action) => {
    switch (action.type) {
		case 'MERGE-HOME-STATES':
			state = update(state, {$merge: action.payload});
		break;

        default:
            return state;
    }

    return state;
};