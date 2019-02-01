import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: '',
      curHeight: '',
      curAge: '',
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const addSmurfHold = {
      name: this.state.curName,
      age: this.state.curAge,
      height: this.state.curHeight
    }
    this.props.addingSmurf(addSmurfHold);
    this.setState({
      curName: '',
      curAge: '',
      curHeight: '',
      modal: false
    })
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="addSmurfDiv">
        <Button color="primary" onClick={this.toggle}>Add Smurf</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="Smurf name" name="curName" value={this.state.curName} />
            <Input required onChange={this.handleChange} type="text" placeholder="Height" name="curHeight" value={this.state.curHeight} />
            <Input required onChange={this.handleChange} type="number" min="0" max="300" placeholder="Smurf age" name="curAge" value={this.state.curAge} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}
