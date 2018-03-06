import Immutable from 'immutable';

const { Map } = Immutable;

const initialState = Map({
  applicants: [],
  applications: [],
  assignments: [],
  courses: [],
  instructors: []
});

// in another file we just say (import function-name from "this-file")
export default function tapp(state = initialState, action = {}) {
  switch(action.type) {
    case "FETCH":
      console.log("Reducing!")
      return state.set('applications', action.applications);
      // return merge(state, {
      //     applicants: action.applicants,
      //     applications: action.applications,
      //     assignments: action.assignments,
      //     courses: action.courses,
      //     instructors: action.instructors
      //   });
    case "POST":
      return state.set('')
    default:
      return state;
  }

}
