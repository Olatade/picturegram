import React from "react";
import Photo from "./photo";
import { Link } from "react-router";

const PhotoGrid = React.createClass({
  render() {
    // console.log(this.props);
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          // '...this.pros' will pass down all the props to that specific component
          //  'i={i}' because  we are passing along the index of the element along because we will need it...key is used in react and cannot be accessed in Photo component
          // post is passing down the specific information about that  post
          <Photo {...this.props} key={i} i={i} post={post} />     
        ))}
      </div>
    );
  },
});

export default PhotoGrid;