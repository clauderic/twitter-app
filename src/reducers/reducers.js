import { combineReducers } from 'redux';

import tweets from './_tweets.reducer';

const reducers = combineReducers({
  tweets : tweets
});

export default reducers;