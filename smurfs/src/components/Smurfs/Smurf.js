import React, { Component } from 'react';
import EditSmurf from './EditSmurf';

import { Button, Card, Collapse, CardText, CardTitle, CardBody } from 'reactstrap';


export default class Smurf extends Component {
  constructor(props){
    super(props);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.state = { collapse: false };
  }

  toggleInfo() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleDelete = () => {
    this.props.deletingSmurf(this.props.smurf.id)
  }

  displayAddInfo = () => {
    if(!this.props.smurf.additional){
      return 'No additional info'
    } else {
      return this.props.smurf.additional
    }
  }



  render() {
    return (
        <Card className="smurfHold">
        <CardBody>
          <CardTitle>
            <h3>{this.props.smurf.name}</h3>
          </CardTitle>
          <CardText>
            <p>Height: {this.props.smurf.height}</p>
            <p>Age: {this.props.smurf.age}</p>
          </CardText>
          {/* <Collapse isOpen={this.state.collapse}>
            <div class="moreInfo">
              {this.displayAddInfo()}
            </div>
          </Collapse> */}
          <div class="smurfButtons">
          {/* <Button color="info" onClick={this.toggleInfo} >More Info</Button> */}
            <div class="smurfButtonsEdDe">
              <EditSmurf 
                id={this.props.smurf.id} 
                name={this.props.smurf.name}
                height={this.props.smurf.height}
                age={this.props.smurf.age} 
                updatingSmurf={this.props.updatingSmurf} />
              <Button color="danger" onClick={this.handleDelete}>Delete</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}