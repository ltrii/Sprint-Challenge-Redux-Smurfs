import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs, addingSmurf, deletingSmurf, updatingSmurf } from '../actions';

import AddSmurf from './Smurfs/AddSmurf';
import Smurfs from './Smurfs/Smurfs';

class App extends Component {
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
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs {...this.props} />
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
)(App);