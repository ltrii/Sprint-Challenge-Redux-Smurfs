import React, { Component } from 'react';
import { Badge, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchingSmurfs, addingSmurf, deletingSmurf, updatingSmurf } from '../actions';

import AddSmurf from './Smurfs/AddSmurf';
import Smurfs from './Smurfs/Smurfs';

class SmurfApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false
    }
  }

  componentDidMount() {
    if(!this.state.initialized){
    this.props.fetchingSmurfs();
    }
    this.setState({
      initialized: true
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.smurfs.length !== this.props.smurfs.length) {
      this.props.fetchingSmurfs();
    }
  }


  render() {
    return (
      <div>
        <div class="header">
          <h1>Smurfs<Badge className="headBadge" pill href="https://redux.js.org/" color="secondary">Redux</Badge></h1><div>{(this.props.isFetching ? <Spinner color="success" /> : <p></p>)}
          </div>
        </div>
        <AddSmurf {...this.props} />
        <Smurfs {...this.props} smurf={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetchingSmurfs: state.fetchingSmurfs,
    isFetching: state.isFetching,
    isAddingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchingSmurfs, addingSmurf, deletingSmurf, updatingSmurf }
)(SmurfApp);