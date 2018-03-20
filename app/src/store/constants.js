export const alertTypes = {
  UPDATE_POSITIONS: 'POSITIONS',
  FETCH_ALL: 'FETCH_ALL',
  REQUEST_EMAIL: 'REQUESTING_EMAIL',
  SUCCESS_EMAIL: 'SUCCESS_EMAIL',
  ERROR_EMAIL: 'ERROR_EMAIL',
  REQUEST: 'ALERT_REQUEST',
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR'

}

export const routes = {
  APPLICANTS: '/applicants',
  POSITIONS: '/positions',
  ASSIGNMENTS: '/assignments',
  APPLICATIONS: '/applications',
  INSTRUCTORS: '/instructors',
  EMAILASSIGNMENTS: '/email-assignments'
}

export const methods = {
  GET: {
        headers: {
                Accept: 'application/json',
            },
        method: 'GET',
        credentials: 'include',
  },
  POST: {
       headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json; charset=utf-8',
           },
       method: 'POST',
       body: null,
       credentials: 'include'
 },
 PUT: {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        method: 'PUT',
        body: null,
        credentials: 'include',
    },
  DEL: {
        method: 'DELETE',
        credentials: 'include',
    }
}
