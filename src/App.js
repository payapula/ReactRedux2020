import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addAction, subAction, addPlayer, removePlayer} from './actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playername:""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({playername : e.target.value});
  };
  render(){
    console.log('rendered');
    return (
      <div className="App">
        
        <Typography color="textSecondary" variant="h5" component="h2">
          VALUE : {this.props.value}
        </Typography>


        <Button variant="contained" color="primary" onClick={this.props.handleIncrement} >
        Increment
       </Button>
        <Button variant="contained" color="secondary" onClick={this.props.handleDecrement} >
        Decrement
       </Button>
        <br/>

        <TextField
        id="standard-name"
        label="Player Name"
        onChange={this.handleChange}
        />
        <Button variant="contained" color="primary" onClick={() => this.props.addPlayer(this.state.playername)} >
          Add Player
        </Button>


        {this.props.players.map((value, inx) => {  
          return (<li key={value} onClick={() => this.props.removePlayer(inx)}>{value}</li>);
        })}
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return {
    value : state.counter,
    players : state.player
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    handleIncrement(){
      dispatch(addAction());
    },
    handleDecrement(){
      dispatch(subAction());
    },
    addPlayer(data){
      dispatch(addPlayer(data));
    }, removePlayer(data){
      dispatch(removePlayer(data))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
