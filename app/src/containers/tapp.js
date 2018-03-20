import React from 'react';
import Immutable from 'immutable';
import { fetchAll }  from '../store/app/action';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Positions } from '../containers/positions';


class TAPP extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <AdminRouter {...this.props} />;
  }
}


const AdminRouter = props => {
  return (
    <Router basename="tapp">
      <div>
        <Route path={'/positions'} render={() => <Positions {...props} />} />
      </div>
    </Router>
  );
}

// Tells us how to structure our state into our presentational layer
// when we call console.log(this.props), this structure is what will be returned
// this is the only way for the presentation layer to know about the state of the store
const mapStatetoProps = state => {
  return {
    applicants: state.tapp.get('applicants'),
    applications: state.tapp.get('applications'),
    assignments: state.tapp.get('assignments'),
    positions: state.tapp.get('positions'),
    instructors: state.tapp.get('instructors'),
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchAll())
  }
}

const connectedApp = connect(mapStatetoProps, mapDispatchtoProps)(TAPP);


// Tells us which actions/functions we want to pass down to our presentational layer
// const mapDispatchtoProps = dispatch => {
//
// }

export { connectedApp as TAPP };
