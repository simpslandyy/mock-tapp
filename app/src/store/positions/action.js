import { getAll, postEmails } from '../../services/fetching';
import { alertTypes } from '../constants';


export const emailAssignments = (code, round, key) => {
  return dispatch => {
      let emailID = "email-" + key;
      let spinnerID = "spinner-" + key;
      console.log({emailID: emailID, spinnerID: spinnerID})
      console.log("In Email Assignments")
      dispatch(emailRequest(emailID, spinnerID));

      postEmails({position: code, round_id: round}).then(obj => {
        if (obj.status == 200) {
        console.log("PASSING EMAIL")
          dispatch(emailSuccess(emailID, spinnerID));
        } else {
          console.log('ERROR EMAIL')
          dispatch(emailFailure(emailID, spinnerID, obj.data))
        }
      })
}
}


const emailRequest = (emailID, spinnerID) => { return { type: alertTypes.REQUEST_EMAIL, emailID: emailID, spinnerID: spinnerID } };
const emailSucccess = (emailID, spinnerID) => { return { type: alertTypes.SUCCESS_EMAIL, emailID: emailID, spinnerID: spinnerID } };
const emailFailure = (emailID, spinnerID, err) => { return { type: alertTypes.ERROR_EMAIL, error: err, emailID: emailID, spinnerID: spinnerID } };
