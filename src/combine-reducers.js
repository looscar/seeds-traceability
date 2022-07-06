import {combineReducers} from 'redux';

import { global } from '@Src/Global/Reducer';
import { home } from '@Src/Home/Reducer';
import { dashboard } from '@Src/Dashboard/Reducer';

// Combine Them All! =>
const all = combineReducers({
    global,
    home,
    dashboard,
});

export default all;