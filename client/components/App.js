/*
  This component will help
  - inject data into the component where it is needed
  - expose actions to buttons and components
*/

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';



// this function will do the magic and sureface our data
function mapStateToProps(state){
  return{
    posts: state.posts,
    comments: state.comments
  }
}

//this function will do the magic and surface our function
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}


/**
 * mapStateToProps amd matchDispatchToProps will take our state (post and comments) and our dispatch ( the action creators)
 * and surface those data in the functions via pros in our component
 */
// Take regular Main component and add (all of the data and props from stateToProps), (all of our action creators from dispatchToProps)
const App = connect(mapStateToProps, mapDispatchToProps)(Main); 

export default App;