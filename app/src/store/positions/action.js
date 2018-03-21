import { getPositions } from '../../services/fetching';
import { alerts } from '../constants';

export function fetchPositions() {
  console.log("Fetching all!");
  return dispatch => {
      dispatch(request('Fetching positions'));

      getPositions().then(resp => {
        if (resp.status == 200) {
          dispatch(success(resp.data))
        } else {
          dispatch(failure(resp.data.message))
        }
      })
  }
}

const success = (body) => { return { type: alerts.SUCCESS_POS, data:body }; };
const failure = (err) => { return { type: alerts.ERROR_POS, error: err }; };
const request = (msg) => { return { type: alerts.REQUEST_POS, msg: msg }};
