import { combineReducers } from 'redux';

// import all reducers here
import list from './reducers/list';
import listItem from './reducers/listItem';
import user from './reducers/user';


export default combineReducers({
    // pass all the reducers here
    list,
    listItem,
    user,
});