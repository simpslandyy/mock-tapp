import { getAll } from '../../services/fetching';
import { alertTypes } from '../constants';

export const fetchAll = () => {
  return dispatch => {
    getAll().then((data) => {
      dispatch(successFetch(data))
    }).catch((err) => {
      dispatch(failedFetch(err))
    })
  }
}


// export changeCourseProperties = () => {
//   return dispatch => {
//
//   }
// }

const successFetch = (body) => { return { type: alertTypes.FETCH_ALL, resp: body }; };
const failedFetch = (err) => { return { type: alertTypes.ERROR, resp: err } };
