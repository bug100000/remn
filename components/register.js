import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Thumbnail, Button, Glyphicon, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
let savepw = '';
let name = '';
class Info extends React.Component{
  constructor(props){
      super(props);
      this.state = {result: true, inputstate: null, message: ''};
    }

    handlerclick(){
      var data ={
        name: name,
        password: savepw
      }
      // var thisin = this;
      $.post('/register', data, (data) => {
        console.log(data);
        this.setState({message: data.result});

      })
      console.log('login');
    }

    handleChangename(e){
      name = e.target.value;
    }

    handleChangepw(e){
      savepw = e.target.value;
    }

    handleChange(e){
       if(savepw === e.target.value){
         this.setState({result: false, inputstate: 'success'});
       }
       else {
         this.setState({result: true , inputstate: 'error'});
       }
    }
  render(){
    var result = this.state.result;
    var inputstate = this.state.inputstate;
    var message = this.state.message;

    return (
      <div className="login-react">
      <div>{message}</div>

    <FormGroup controlId="name">
    <ControlLabel>User Name:</ControlLabel>
    <FormControl type="text" onChange={this.handleChangename.bind(this)}/>
    <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="password1" validationState={inputstate}>
    <ControlLabel>Input password:</ControlLabel>
    <FormControl type="password" onChange={this.handleChangepw.bind(this)}/>
    <FormControl.Feedback />
    </FormGroup>

    <FormGroup controlId="password2" validationState={inputstate}>
    <ControlLabel>Input password:</ControlLabel>
    <FormControl type="password" onChange={this.handleChange.bind(this)} />
    <FormControl.Feedback />
    </FormGroup>

<Button bsStyle='success' onClick={this.handlerclick.bind(this)}  disabled={result}><Glyphicon glyph="star" /> register</Button>

<Button bsStyle='primary' type='reset' >cancel</Button>
      </div>
    )
  }
};
ReactDOM.render(<Info />, document.getElementById("example"))
