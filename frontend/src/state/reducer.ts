import { combineReducers } from 'redux';

import userDataReducer from './reducer.userData';

const rootReducer = combineReducers({
    userData: userDataReducer,
});

export default rootReducer