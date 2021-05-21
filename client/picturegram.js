import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// This is the bindings that allows us to use redux with react. redux and react are not synonymous
import { Provider } from 'react-redux';
// import store and history. check out the file to know what it does
import store, { history } from './store';

const router = (
  <Provider store={store}>
    {/* Provider will expose our store to our entire application */}
    {/* a version of browserHistory that has been synched with store. this was created in store.js */}
    <Router history={history}>
      {/* use the Main component at the very top level*/}
      <Route path="/" component={Main}>
        {/* if url matches /, display the photogrid component */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        {/* display the single component when the path matches /view/:postId */}
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));