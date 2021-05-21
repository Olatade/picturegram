// put all the reducers here

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';


// passing routing because we want to pass the changes in the url
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;