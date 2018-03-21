import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPositions }  from '../store/positions/action';


class TAPP extends React.Component {
  componentDidMount() {
    this.props.fetchPositions();
  }

  render() {
    return (
      <Router basename="tapp">
        <div>
          <Route path='/byPositions' render={() => <Positions {...this.props}/>} />
        </div>
      </Router>
    )
  }
}


// Tells us how to structure our state into our presentational layer
// when we call console.log(this.props), this structure is what will be returned
// this is the only way for the presentation layer to know about the state of the store
const mapStatetoProps = state => {
  return {
    applications: state.tapp.get('applications')
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    fetchPositions: () => dispatch(fetchPositions())
  }
}

const connectedApp = connect(mapStatetoProps, mapDispatchtoProps)(TAPP);


// Tells us which actions/functions we want to pass down to our presentational layer
// const mapDispatchtoProps = dispatch => {
//
// }

export { connectedApp as TAPP };
