import { getAssignments, postEmails } from '../../services/fetching';
import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';

export function fetchAssignments() {
  return dispatch => {
      dispatch(request(alerts.REQUEST,'Fetching assignments'));

      getAssignments().then(resp => {
        if (resp.status == 200) {
          dispatch(success(alerts.FETCH_ASSIGNMENTS, resp.data))
        } else {
          dispatch(failure(alerts.ERROR, resp.data.message))
        }
      })
  }
}

export function emailAssignments(code, round, key) {

  return dispatch => {
    dispatch(request(alerts.REQUEST_SEND_EMAILS, 'Pending to send emails', {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));

    postEmails({position: code, round_id: round}).then(resp => {
      if (resp.status == 200) {
        dispatch(success(alerts.SUCCESS_SEND_EMAILS, null,  {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));
      } else {
        dispatch(failure(alerts.ERROR_SEND_EMAILS, resp.data.message,  {emailID: 'email-' + key, spinnerID: 'spinner-' + key}));
      }
    })
  }
}
