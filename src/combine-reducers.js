import {combineReducers} from 'redux';

import { global } from '@Src/Global/Reducer';
import { home } from '@Src/Home/Reducer';

// Combine Them All! =>
const all = combineReducers({
    global,
    home,
});

export default all;