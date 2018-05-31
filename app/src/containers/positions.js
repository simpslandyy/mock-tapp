import React from 'react';
import { connect } from 'react-redux';
import { GridWrapper } from '../components/gridWrapper';
import { getPositionsBy, getPositions } from '../store/positions/reducer';
import { getInstructors } from '../store/instructors/reducer';
import { emailAssignments } from '../store/assignments/action';
import { updatePositions } from '../store/positions/action';
import { onFormFocus } from '../store/front/action';

class Positions extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return <GridWrapper {...this.props}/>;
  }
}

const mapStatetoProps = (state, props) => {
  // console.log(state)
  return {
    gridListData: getPositionsBy(state.positions, 'position', 'round_id'),
    listGroupData: getPositions(state.positions),
    header: 'Courses',
    container: 'course',
    email_hover: 'Send TA Assignment to instructors'
  }
}

// CHANGE THIS
const mapDispatchtoProps = (dispatch) => {
  // return {
  //   onEmailClick: () => {
  //     dispatch(updatePositions());
  //   }
  // }
  return {
    onEmailClick: (course_code, round_id, key) => {
        dispatch(emailAssignments(course_code, round_id, key));
    },
    updateData: (courseID, value, field) => {
      dispatch(updatePositions(courseID, value, field));
    },
    focusThis: (field, courseID) => {
      dispatch(onFormFocus(field, courseID));
    }
  }
}

const connectedPositions = connect(mapStatetoProps, mapDispatchtoProps)(Positions);

export { connectedPositions as Positions };
