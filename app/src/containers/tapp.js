import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPositions }  from '../store/positions/action';
import { fetchAssignments } from '../store/assignments/action';
import { Positions } from './positions';

class TAPP extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPositions();
    this.props.fetchAssignments();
  }

  render() {
    return (
      <Router basename="tapp">
        <Switch>
          <Route path='/positions' render={() => <Positions {...this.props}/>} />
        </Switch>
      </Router>
    )
  }
}


const mapDispatchtoProps = dispatch => {
  return {
    fetchPositions: () => dispatch(fetchPositions()),
    fetchAssignments: () => dispatch(fetchAssignments())
  }
}

const connectedApp = connect(null, mapDispatchtoProps)(TAPP);


// Tells us which actions/functions we want to pass down to our presentational layer
// const mapDispatchtoProps = dispatch => {
//
// }

export { connectedApp as TAPP };
