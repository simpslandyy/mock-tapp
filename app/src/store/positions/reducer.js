import Immutable from 'immutable';
import { alerts } from '../constants';
const { Map } = Immutable;

const initialState = Map({});

// in another file we just say (import function-name from "this-file")
export default function positions(state = initialState, action = {}) {
  switch(action.type) {
    case alerts.FETCH_POSITIONS:
      action.data.forEach((position) => {
        state = state.set(position.id, position);
      })
      return state;
    case alerts.ERROR:
      console.log(initialState)
      return initialState;
    default:
      return state;
  }
}


////////// ---- SELECTORS -----

export function getPositionsBy(state, listable, bundling_key = null) {
  let bundle = [];
  if (state.isEmpty()) {
    return bundle;
  }

  if (!bundling_key) {
    state.valueSeq().forEach(position => {
      bundle.push(position[listable]);
    })
  } else {
    state.valueSeq().forEach(position => {
      bundle.push({id: position[bundling_key], name: position[listable]})
    })
  }

  return bundle;
}

export function getPositions(state) {
  let bundle = [];
  if (state.isEmpty()) {
    return bundle;
  }
  state.valueSeq().forEach(position => {
    bundle.push(position)
  })

  return bundle;
}
