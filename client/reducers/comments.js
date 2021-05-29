// we need to create a reducer for each piece of state
// all states can be found in client/store.js


// a reducer takes in two things
//1. the action
//2. a copy of the current state


// this will handle the updating of an individual comment
function postComments(state = [], action){
  switch(action.type){
    case 'ADD_COMMENT':
      // return the current state which is all the objects under state and then add the comment that was added
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log("Removing a comment");
      // we need to return the new state without the deleted comment;
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

 
// set state to empty
function comments(state = [], action ){
  if(typeof action.postId !== 'undefined'){
    console.log(state);
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one 
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;