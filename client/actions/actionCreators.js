// increment likes
/**
 *
 * @param {*} index - thich post is gonna have it's likes incremented
 * @returns - an object
 */
export function increment(index) {
  return {
    type: "INCREMENT_LIKES", // name of the action that gets dispatched
    index,
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}

//remove comment
/**
 *
 * @param {*} postId
 * @param {*} i - index of the comment that got removed
 */
export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId,
  };
}
