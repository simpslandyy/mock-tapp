import Immutable from 'immutable';

const { Map } = Immutable;

const initialState = Map({});

// in another file we just say (import function-name from "this-file")
export default function position_reduce(state = initialState, action = {}) {
  switch(action.type) {
    case "FETCH_POSITIONS":
      action.positions.forEach((position) => {
        let course = {
          course_name: position.course_name,
          position: position.position,
          campus: (function(code) {
            switch(code) {
              case 1:
                return 'St.George';
              case 3:
                return 'Scarborough';
              case 5:
                return 'Mississauga';
              default:
                return 'Other';
            }
          })(position.campus_code),
          current_enrolment: position.current_enrolment,
          cap_enrolment: position.cap_enrolment,
          num_waitlisted: position.num_waitlisted
        }
        state = state.set(position.id, course);
      })

      return state;
    default:
      return state;
  }
}
