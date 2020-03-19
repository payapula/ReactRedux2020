import React from 'react';
import {connect} from 'react-redux'
import {addPlayer, removePlayer} from '../actions/ActionCreators'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Player extends React.Component{
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

  addLocalPlayer(data){
        this.props.addPlayer(data);
  };


  render(){
      console.log('rendered');
    return (
      <div className="App">
        <h3> Only Player List</h3>
        <TextField
        id="standard-name"
        label="Player Name"
        onChange={this.handleChange}
        />
        <Button variant="contained" color="primary" onClick={this.addLocalPlayer.bind(this, this.state.playername)} >
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
    players : state.player
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    addPlayer(data){
      dispatch(addPlayer(data));
    }, removePlayer(data){
      dispatch(removePlayer(data))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Player);
