export const fetchTweets = user => {
  return {
    type: 'FETCH_TWEETS',
    user,
  };
};
