import {
  FETCH_USER_FAILED,
  SEARCHED_TEXT,
  SAVE_SUGGESTIONS
} from './actionTypes';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
const R = require('ramda');

export const onTextChange = e => (dispatch, getState) => {
  const value = e.target.value;
  dispatch({ type: SEARCHED_TEXT, payload: value });
  dispatch(postUserDetails(value));
};

export const postUserDetails = data => (dispatch, getState) => {
  const obs$ = ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
    map(userResponse => {
      console.log('users: ', userResponse);
      dispatch(dataOnSuccess(userResponse));
    }),
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );

  obs$.subscribe(response => {
    // useractions
  });
};

export const dataOnSuccess = data => (dispatch, getState) => {
  let a = getState().text;
  let matchedValue = [];
  data.filter(value => {
    let userId = value.userId;
    if (String(a).includes(String(userId))) {
      let dict = {};
      dict[userId] = value;
      matchedValue.push(dict);
    }
  });

  dispatch(saveSuggestions(matchedValue));
};

export const saveSuggestions = data => (dispatch, getState) => {
  dispatch({ type: SAVE_SUGGESTIONS, payload: data });
};

export const getUserFailed = () => ({
  type: FETCH_USER_FAILED
});
