import React from 'react';
import Tweet from './Tweet.component';
import './Tweets.style.css';

const Tweets = ({data}) => {
  return (
    <div className="c-cards">
      {data.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
};

export default Tweets;
