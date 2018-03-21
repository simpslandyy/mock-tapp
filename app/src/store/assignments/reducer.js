import Immutable from 'immutable';
import { alerts } from '../constants';
const { Map } = Immutable;

const initialState = Map({});

// in another file we just say (import function-name from "this-file")
export default function assignments(state = initialState, action = {}) {
  switch(action.type) {
    case alerts.FETCH_ASSIGNMENTS:
      action.data.forEach((assignment) => {
        state = state.set(assignment.id, assignment);
      })
      return state;
    default:
      return state;
  }
}
