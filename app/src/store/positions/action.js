import "regenerator-runtime/runtime";

import { getPositions } from '../../services/fetching';
import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';
import { methods } from '../constants';
import { routes } from '../constants';

export const fetchPositions = () => {
  return async (dispatch) => {
    console.log('fetching again')
      dispatch(request(alerts.REQUEST, 'Fetching positions'));

      let response = await fetch(routes.POSITIONS, methods.GET);
      let data = await response.json();
      if (response.ok) {
          dispatch(success(alerts.FETCH_POSITIONS, data));
      } else {
          dispatch(failure(alerts.ERROR, data.message));
      }
  }
}

export const updatePositions = (courseID, value, field) => {
    return async (dispatch) => {
      dispatch(request(alerts.REQUEST, 'Updating a position'));
      var body = {};
      switch(field) {
        case 'estimatedPositions':
            body['estimated_count'] = value;
            break;
        case 'positionHours':
            body['hours'] = value;
            break;
        case 'estimatedEnrol':
            body['current_enrolment'] = value;
            break;
        case 'qual':
            body['qualifications'] = value;
            break;
        case 'resp':
            body['duties'] = value;
            break;
        case 'cap':
            body['cap_enrolment'] = value;
            break;
        case 'waitlist':
            body['num_waitlisted'] = value;
            break;
        case 'startDate':
            body['start_date'] = value;
            break;
        case 'endDate':
            body['end_date'] = value;
            break;
      }
      console.log('UPDATE POSITIONS: ' + body)

      let config = methods.PUT;
      config['body'] = JSON.stringify(body);
      let response = await fetch(routes.POSITIONS + '/' + courseID, config);
      if (response.ok) {
        dispatch(fetchPositions());
        dispatch(success(alerts.SUCCESS_POSITION_UPDATE, {eID: field + '-' + courseID}));
      } else {
        console.log('error')
        dispatch(failure(alerts.FAILURE_POSITION_UPDATE, response.statusText, {eID: field + '-' + courseID}));
      }

    }
};
