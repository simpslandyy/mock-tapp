import Immutable from 'immutable';
import { alerts } from '../constants';
const { Map } = Immutable;

const initialState = Map({});

export default function instructors(state = initialState, action = {}) {
  switch(action.type){
    case alerts.FETCH_INSTRUCTORS:
      action.data.forEach((instructor) => {
        state = state.set(instructor.id, instructor);
      })
      return state;
    default:
      return state;
  }
}



// ---- SELECTORS -----
export function getInstructors(state) {
  let bundle = [];
  state.valueSeq().forEach(instructor => {
    bundle.push(instructor);
  })

  return bundle;
}
