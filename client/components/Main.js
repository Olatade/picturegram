import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Picturegram</Link>
        </h1>
        {/* take any props coming down from the parent component and pass them along to photogrid or single grid */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});

export default Main;
