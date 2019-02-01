import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: this.props.name,
      curHeight: this.props.height,
      curAge: this.props.age,
      curID: this.props.id,
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
    let updatedSmurf = {
      name: this.state.curName,
      age: this.state.curAge,
      height: this.state.curHeight,
      id: this.state.curID
    }
    this.props.updatingSmurf(updatedSmurf.name, updatedSmurf.age, updatedSmurf.height, updatedSmurf.id);
    this.setState({
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
      <div className="addFriendDiv">
        <Button color="secondary" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="Smurf name" name="curName" value={this.state.curName} />
            <Input required onChange={this.handleChange} type="text" placeholder="Height" name="curHeight" value={this.state.curHeight} />
            <Input required onChange={this.handleChange} type="number" min="0" max="350" placeholder="Smurf age" name="curAge" value={this.state.curAge} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}