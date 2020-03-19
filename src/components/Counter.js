import React from 'react';
import {connect} from 'react-redux'
import {addAction, subAction} from '../actions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Counter extends React.Component{
  render(){
    return (
      <div className="App">
        <h3> Only Counter </h3>
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
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return {
    value : state.counter
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    handleIncrement(){
      dispatch(addAction());
    },
    handleDecrement(){
      dispatch(subAction());
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
