import "regenerator-runtime/runtime";

import { getAssignments, postEmails } from '../../services/fetching';
import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';
import { methods } from '../constants';
import { routes } from '../constants';

export const fetchAssignments = () => {
  return async (dispatch) => {
      dispatch(request(alerts.REQUEST,'Fetching assignments'));

      let response = await fetch(routes.ASSIGNMENTS, methods.GET);
      if (response.ok) {
        let data = await response.json();
        dispatch(success(alerts.FETCH_ASSIGNMENTS, data))
      } else {
        dispatch(failure(alerts.ERROR, response.statusText))
      }
  }
}

export const emailAssignments = (code, round, key) => {

  return async (dispatch) => {
    dispatch(request(alerts.REQUEST_SEND_EMAILS, 'Pending to send emails', {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));

    let config = methods.POST;
    config['body'] = JSON.stringify({position: code, round_id: round});
    let response = await fetch(routes.EMAILASSIGNMENTS, config);
    if (response.ok) {
      dispatch(success(alerts.SUCCESS_SEND_EMAILS, null,  {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));
    } else {
      dispatch(failure(alerts.ERROR_SEND_EMAILS, response.statusText,  {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));
    }
  }
}
