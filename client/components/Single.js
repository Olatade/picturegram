import React from "react";
import Photo from './photo';
import Comment from './Comments'

const Single = React.createClass({
  render() {
    //index of the post
    // this.props.params.postId params is made available to us by the router. check picturegram "<Route path="/view/:postId" component={Single}></Route>"
    const i = this.props.posts.findIndex( (post) => post.code === this.props.params.postId ); // get the index of the post
    const post = this.props.posts[i];
    console.log(post);
    
    //get us the post
    return <div className="single-photo">
      <Photo i={i} post={post} {...this.props} />
    </div>;
  },
});

export default Single;
