import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addAction, subAction, addPlayer, removePlayer} from './actions/ActionCreators'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('rendered');
    return (
      <div className="App">
          WECOME TO REACT REDUX 2020!!
      </div>
    );
  }
}

// const mapStatetoProps = (state) =>{
//   return {
//     value : state.counter,
//     players : state.player
//   }
// }

// const mapDispatchtoProps = (dispatch) =>{
//   return{
//     handleIncrement(){
//       dispatch(addAction());
//     },
//     handleDecrement(){
//       dispatch(subAction());
//     },
//     addPlayer(data){
//       dispatch(addPlayer(data));
//     }, removePlayer(data){
//       dispatch(removePlayer(data))
//     }
//   }
// }

export default App;
