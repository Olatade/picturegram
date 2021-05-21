// we need to create a reducer for each piece of state
// all states can be found in client/store.js


// a reducer takes in two things
//1. the action
//2. a copy of the current state

// displatch an action and then the post reducer will be listening for that action in other to handle the action

// every reducer runs when there is an action. it is up to you to determine what happens depending onthe action that was run


// set state to empty
function posts(state = [], action ){
  console.log("The post wll change");
  console.log(state, action);
  return state;
}

export default posts;