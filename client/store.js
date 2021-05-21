import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory} from 'react-router';


// import the root reducer
import rootReducer from './reducers/index'; // a file that merges all the reducers in the reducers folder together
import comments from './data/comments'; // comments supposed to be from api
import posts from './data/posts'; // posts supposed to be from api

// create an object for the default data
const defaultState = {
  posts,
  comments
};

// root reducer is how we are goint to interface with the store
// default state state is the first data that is loaded
const store = createStore(rootReducer, defaultState);

// when you go from page to page with react router, browser history keeps track of where you have gone
// we are kind of introducing the store to the browser history so that we can use the data in ( history={browserHistory} <- found in reduxstagram.js)
export const history = syncHistoryWithStore(browserHistory, store);

export default store;