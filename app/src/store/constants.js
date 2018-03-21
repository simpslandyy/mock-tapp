export const alerts = {
  FETCH_POSITIONS: 'SUCCESS_FETCH',
  REQUEST_POS: 'REQUEST_POS',
  ERROR_POS: 'ERROR_POS'

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
