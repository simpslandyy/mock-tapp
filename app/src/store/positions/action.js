import { getPositions } from '../../services/fetching';
import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';
import { putPositions } from '../../services/fetching';

export function fetchPositions() {
  return dispatch => {
      dispatch(request(alerts.REQUEST, 'Fetching positions'));

      getPositions().then(resp => {
        if (resp.status == 200) {
          dispatch(success(alerts.FETCH_POSITIONS, resp.data))
        } else {
          dispatch(failure(alerts.ERROR, resp.data.message))
        }
      })
  }
}

export function updatePositions(courseID, value, field) {
    return dispatch => {
      // dispatch(request(alerts.REQUEST, 'Updating a position'));
      var data = {};
      switch(field) {
        case 'estimatedPositions':
            data['estimated_count'] = value;
            break;
        case 'positionHours':
            data['hours'] = value;
            break;
        case 'estimatedEnrol':
            data['current_enrolment'] = value;
            break;
        case 'qual':
            data['qualifications'] = value;
            break;
        case 'resp':
            data['duties'] = value;
            break;
        case 'cap':
            data['cap_enrolment'] = value;
            break;
        case 'waitlist':
            data['num_waitlisted'] = value;
            break;
        case 'startDate':
            data['start_date'] = value;
            break;
        case 'endDate':
            data['end_date'] = value;
            break;
      }
      console.log('UPDATE POSITIONS: ' + data)
      putPositions(courseID, data).then((resp) => {
        if (resp.status == 400) {
          console.log("A failure has occured")
          dispatch(failure(alerts.FAILURE_POSITION_UPDATE, resp.data.message, {eID: field + '-' + courseID}));
        } else {
          console.log("Everything is fine")
          // dispatch(success(alerts.SUCCESS_POSITION_UPDATE, {eID: field + '-' + courseID}))
          fetchPositions();
        }
      });
    }
    /// Note: if the request fails ... nothing is caught ... is this a problem??

}
