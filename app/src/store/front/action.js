import { alerts } from '../constants';
import { success, failure, request } from '../dispatchBuild';

export const onFormFocus = (field, id) => {
  return dispatch => {
    dispatch(success(alerts.FORM_FOCUS, {eID: field + '-' + id}));
  }
}
