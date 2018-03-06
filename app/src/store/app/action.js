import { getApplications } from '../../services/fetching';

export function fetchAll() {
  console.log("Fetching all!");
  return dispatch => {
      dispatch(successFetch(getApplications()))
  }
}

function successFetch(app) {
  return { type: 'FETCH', applications: app };
}
