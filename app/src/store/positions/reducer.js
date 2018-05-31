import Immutable from 'immutable';
import { alerts } from '../constants';
const { Map } = Immutable;

const initialState = Map({});

// in another file we just say (import function-name from "this-file")
export default function positions(state = initialState, action = {}) {
  switch(action.type) {
    case alerts.FETCH_POSITIONS:
      action.data.forEach((position) => {
        state = state.set(position.id, setCampus(position));
      })
      return state;
    case alerts.ERROR:
      console.log(initialState)
      return initialState;
    default:
      return state;
  }
}

//////////---HELPERS
const comparator = (positionA, positionB) => {
  if (positionA.id < positionB.id) { return -1; }
  if (positionA.id > positionB.id) { return 1; }
  if (positionA.id == positionB.id) { return 0; }

}

const setCampus = (position) => {
  var p = position;

  switch (position.campus_code) {
    case 1:
      p['campus_code'] = 'St.George'
      break;
    case 2:
      p['campus_code'] = 'Mississauga';
      break;
    case 3:
      p['campus_code'] = 'Scarborough';
      break;
    default:
      p['campus_code'] = 'Other';
      break;
  }

  return p;
}

////////// ---- SELECTORS -----
export const getPositionsBy = (state, listable, bundling_key = null) => {
  let bundle = [];
  if (state.isEmpty()) {
    return bundle;
  }
  // Sort the state by id
  state = state.sort(comparator);
  if (!bundling_key) {
    bundle = state.map(position => position[listable]).toArray();
  } else {
    bundle = state.map((position) => {
      return { id: position[bundling_key], name: position[listable] };
    }).toArray();
  }
  return bundle;
}

export const getPositions = (state) => {
  let bundle = [];
  if (state.isEmpty()) {
    return bundle;
  }

  state = state.sort(comparator);
  bundle = state.map(position => position).toArray();

  return bundle;
}
