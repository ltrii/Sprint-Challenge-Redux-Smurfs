import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs, addingSmurf, deletingSmurf, updatingSmurf } from '../actions';



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

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.rootReducer.smurfs,
    isFetchingSmurfs: state.rootReducer.fetchingSmurfs,
    isFetching: state.rootReducer.isFetching,
    isAddingSmurf: state.rootReducer.addingSmurf,
    error: state.rootReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchingSmurfs, addingSmurf, deletingSmurf, updatingSmurf }
)(App);