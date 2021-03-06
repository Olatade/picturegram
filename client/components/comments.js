import React from "react";

const Comments = React.createClass({
  renderComment(comment, i) {
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          {/* bind is here so that the function does not run when the component renders */}
          <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },

  handleSubmit(e){ 
    e.preventDefault();
    console.log("submitting the form!");
    // console.log(this.refs); // consoles any element in this component that has a ref on it
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset(); // reset the form

  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  },
});

export default Comments;