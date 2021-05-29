// we need to create a reducer for each piece of state
// all states can be found in client/store.js


// a reducer takes in two things
//1. the action
//2. a copy of the current state

// displatch an action and then the post reducer will be listening for that action in other to handle the action

// every reducer runs when there is an action. it is up to you to determine what happens depending onthe action that was run


// state = [] set state to empty
function posts(state = [], action ){
  /*
    - in redux, we use functional programming this means we do not mutate our state. we use functional programming
    - state[action.i].likes++ <- we can increment the likes like this but that is not how we do it because we sare simply mutating some thing that is outside of this function which means it is not a pure function 
    - A pure function should return thesame result every single time you pass it a variable....impure functions will have changed the variable the first time you pass it in  hence giving it a different result the other times 
    - if you are passing int an object say picture, you can do var pic = Object.assign({}, picture); to clone the picture object
  */
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes');
      const i = action.index;
      // return the updated state
      return[
        ...state.slice(0,i), //before the post we are updating
        {...state[i], likes: state[i].likes + 1}, // spead out the post we are updating  and edit the likes
        ...state.slice(i + 1), // after the post we are updating 
      ]
    default: 
      return state;
  }
}

export default posts;