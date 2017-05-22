import {call, put, takeLatest} from 'redux-saga/effects';
import Api from '../api';

export function* fetchTweets({user}) {
  try {
    yield put({type: 'TWEETS_IS_LOADED', isFetching: true});
    const response = yield call(
      Api.getJSON,
      `http://localhost:3000/tweets/${user}`
    );

    if (response.error) throw response.error;

    yield put({
      type: 'TWEETS_IS_LOADED',
      tweets: response.tweets,
      isFetching: false,
    });
  } catch (error) {
    yield put({type: 'TWEETS_LOAD_FAILURE', errors: true, isFetching: false});
  }
}

export function* watchForLoadTweets() {
  yield takeLatest('FETCH_TWEETS', fetchTweets);
}
