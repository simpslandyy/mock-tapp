import Immutable from 'immutable';
import { alerts } from '../constants';
const { Map } = Immutable;

const initialState = Map({});

export default function front(state = initialState, action = {}) {
  // console.log(action)
  switch(action.type) {
    case alerts.REQUEST_SEND_EMAILS:
      console.log("ALERTING REQUEST FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.extra.emailID);
      var spinner = document.getElementById(action.extra.spinnerID);
      email.style.display = "none";
      spinner.style.display = "block";
      return state;

    case alerts.SUCCESS_SEND_EMAILS:
      console.log("ENDING ALERT FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.extra.emailID);
      var spinner = document.getElementById(action.extra.spinnerID);
      email.style.display = "block";
      spinner.style.display = "none";
      return state;

    case alerts.ERROR_SEND_EMAILS:
      console.log("ERROR ALERT FOR EMAIL, CHANGING SPINNER");
      var email = document.getElementById(action.extra.emailID);
      var spinner = document.getElementById(action.extra.spinnerID);
      email.style.display = "block";
      spinner.style.display = "none";
      email.style.color = "red";
      email.title = action.error.message;
      return state;

    case alerts.FORM_FOCUS:
      var element = document.getElementById(action.data.eID);
      element.className = 'form-group has-null'
      return state;

    case alerts.SUCCESS_POSITION_UPDATE:
      var element = document.getElementById(action.data.eID);
      element.className = 'form-group has-success';
      return state;

    case alerts.FAILURE_POSITION_UPDATE:
      console.log("HERE")
      var element = document.getElementById(action.extra.eID);
      console.log(element)
      element.className = 'form-group has-error';
      return state;

    case alert.REQUEST:
        console.log(action.msg);
        return state;

    case alert.ERROR:
        console.log(action.error);
        return state;
    default:
      return state
  }
}
