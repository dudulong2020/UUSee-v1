import home from './home';
import profile from './profile';
import rank from './rank';
import join from './join';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
    home,
    profile,
    rank,
    join,
    router:routerReducer
});