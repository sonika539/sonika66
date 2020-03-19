import 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_USER, FETCH_EMPLOYEE_DATA } from './actionTypes';
import {
  getDataSuccess,
  getUserFailed,
  getEmployeeDataSuccess
} from './actions';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

export const fetchUser = action$ => {
  return action$.ofType(FETCH_USER).pipe(
    switchMap(() => {
      return ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
        map(user => getDataSuccess(user)),
        catchError(error => Observable.of(getUserFailed()))
      );
    })
  );
};

export const fetchEmployeeData = action$ => {
  return action$.ofType(FETCH_EMPLOYEE_DATA).pipe(
    switchMap(() => {
      return ajax
        .getJSON('http://dummy.restapiexample.com/api/v1/employees')
        .pipe(
          map(user => getEmployeeDataSuccess(user.data)),
          catchError(error => Observable.of(getUserFailed()))
        );
    })
  );
};

export default combineEpics(fetchUser, fetchEmployeeData);
