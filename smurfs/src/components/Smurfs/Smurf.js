import React, { Component } from 'react'

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
        <div>
            SMURF!
        </div>
    )
  }
}