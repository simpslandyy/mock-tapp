import Immutable from 'immutable';
import { alertTypes } from '../constants';
const { Map } = Immutable;

const initialState = Map({
  container: "position",
  header: "Positions"
})

export default function positions(state = initialState, action = {}) {
  switch(action.type) {
    case alertTypes.REQUEST_EMAIL:
      console.log("ALERTING REQUEST FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.emailID);
      var spinner = document.getElementById(action.spinnerID);
      email.style.display = "none";
      spinner.style.display = "block";
      return state;
    case alertTypes.SUCCESS_EMAIL:
      console.log("ENDING ALERT FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.emailID);
      var spinner = document.getElementById(action.spinnerID);
      email.style.display = "block";
      spinner.style.display = "none";
      return state;
    case alertTypes.ERROR_EMAIL:
      console.log("ERROR ALERT FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.emailID);
      var spinner = document.getElementById(action.spinnerID);
      email.style.display = "block";
      spinner.style.display = "none";
      email.style.color = "red";
      email.title = action.error.message;
      return state;
    default:
      return state;
  }
}
