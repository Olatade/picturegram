// let's go!
import React from "react";
import { render } from "react-dom";
//import css
import css from "./styles/style.styl";

//import components
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    {/* use the Main component at the very top level*/}
    <Route path="/" component={Main}>
      {/* if url matches /, display the photogrid component */}
      <IndexRoute component={PhotoGrid}></IndexRoute>
      {/* display the single component when the path matches /view/:postId */}
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

render(
  router,
  document.getElementById("root")
);
