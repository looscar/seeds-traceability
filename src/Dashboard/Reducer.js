import update from 'immutability-helper';

export const dashboard = (state = {
    'records': false,
}, action) => {
    switch (action.type) {
		case 'MERGE-DASHBOARD-STATES':
			state = update(state, {$merge: action.payload});
		break;

        default:
            return state;
    }

    return state;
};