import Immutable from 'immutable';
import { alertTypes } from '../constants';
const { Map } = Immutable;

const initialState = Map({
  applicants: [],
  applications: [],
  assignments: [],
  positions: [],
  instructors: []
});

// in another file we just say (import function-name from "this-file")
export default function tapp(state = initialState, action = {}) {
  switch(action.type) {
    case alertTypes.FETCH_ALL:
    // console.log({REDUCER: action.resp.positions})
      return state
      .set("applicants", action.resp.applicants)
      .set("applications",action.resp.applications)
      .set("assignments", action.resp.assignments)
      .set("positions", action.resp.positions)
      .set("instructors", action.resp.instructors)

    case alertTypes.UPDATE_POSITIONS:
      return state.set('positions', action.positions);
    case alertTypes.ERROR:
      return { error: action.resp }
    default:
      return state;
  }
}
