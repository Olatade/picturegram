import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// This is the bindings that allows us to use redux with react. redux and react are not synonymous
import { Provider } from 'react-redux';
// import store and history. check out the file to know what it does
import store, { history } from './store';

// using sentry to track errors
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

//creating a custom tag for sentry
Raven.config(sentry_url, {
  tags: {
    git_commit: 'asijhripo',
    userLevel: 'editor'
  }
}).install();

//logging custom exceptions that enable you add context
logException(new Error('download failed'), {
  email: 'olatade@abiona'
});

//just logging a message
Raven.captureMessage('something bad happened');

//showing a report dialog
// Raven.showReportDialog();

// console.log(window.doesNotExist.nope);

const router = (
  <Provider store={store}>
    {/* Provider will expose our store to our entire application */}
    {/* a version of browserHistory that has been synched with store. this was created in store.js */}
    <Router history={history}>
      {/* use the Main component at the very top level*/}
      <Route path="/" component={App}>
        {/* if url matches /, display the photogrid component */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        {/* display the single component when the path matches /view/:postId */}
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));