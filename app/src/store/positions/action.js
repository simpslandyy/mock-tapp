import { getPositions } from '../../services/fetching';
import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';

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

export function updatePositions() {
    return dispatch => {
      dispatch(failure(alerts.ERROR, "perfect"));
    }
}
