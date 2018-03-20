// until i can figure out where to add this in the bundle
import "regenerator-runtime/runtime";
import { routes } from '../store/constants';
import { methods } from '../store/constants';

const fetchCall = async (route, config) => {
  let response = await fetch(route, config);
  let data = await response.json();
  return {data: data, status: response.status};
}

export const getAll = async() => {
  let applicants = await getApplicants();
  let positions = await getPositions();
  let assignments = await getAssignments();
  let applications = await getApplications();
  let instructors = await getInstructors();

  // HANDLING ERRORS???
  let data = {
    applicants: applicants.data,
    positions: positions.data,
    assignments: assignments.data,
    applications: applications.data,
    instructors: instructors.data
  }
  // console.log({path: route, body: data});
  return data;
}

export const getApplicants = () => {
  return fetchCall(routes.APPLICANTS, methods.GET)
}

export const getPositions = () => {
  return fetchCall(routes.POSITIONS, methods.GET)
}

export const getAssignments = () => {
  return fetchCall(routes.ASSIGNMENTS, methods.GET);
}

export const getApplications = () => {
  return fetchCall(routes.APPLICATIONS, methods.GET);
}


export const getInstructors = () => {
  return fetchCall(routes.INSTRUCTORS, methods.GET);
}

export const putPositions = (body) => {
  let config = methods.PUT;
  config['body'] = JSON.stringify(body);
  return fetchCall(routes.POSITIONS, config)
}

export const postEmails = (body) => {
  console.log("POSTING EMAIL IN FETCHING LOGIC")
  // console.log({routes: routes, config: methods})
  let config = methods.POST;
  config.body = JSON.stringify(body);
  console.log(config)
  return fetchCall(routes.EMAILASSIGNMENTS, config);
}
