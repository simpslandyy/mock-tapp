import React from 'react';
import { connect } from 'react-redux';
import { emailAssignments } from '../store/positions/action';
import { GridWrapper } from '../components/gridWrapper';

class Positions extends React.Component {
  constructor(props) {
    super(props);
    // console.log({POSITIONS: this.props})
  }
  render() {
    return <GridWrapper {...this.props} />;
  }
}

const mapStatetoProps = (state, props) => {
  return {
    name: state.positions.get('container'),
    header: state.positions.get('header'),
    title: "Send TA Assignment to Instructors",
    data: props.positions
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    pendingRequest: (code,round,key) => dispatch(emailAssignments(code,round,key)),
  }
}

const connectedApp = connect(mapStatetoProps, mapDispatchtoProps)(Positions);

export { connectedApp as Positions };
