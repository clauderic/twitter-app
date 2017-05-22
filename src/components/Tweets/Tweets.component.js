import React from 'react';
// import { branch, renderComponent } from 'recompose';
import Tweet from './Tweet.component';
import './Tweets.style.css';

// import { Spin } from 'antd';

// const spinnerWhileLoading = isLoading =>
//   branch(
//     isLoading,
//     renderComponent(Spin)
//   )

// const enhance = spinnerWhileLoading(
//   props => !(props.data)
// )

/*const Tweets = enhance(({ data = [] }) => {
  return (
    <div className="c-cards">
      { data.map(tweet => <Tweet key={tweet.id} {...tweet} /> )}
    </div>
  )
}
)*/

const Tweets = ({ data }) => {
  return (
    <div className="c-cards">
      { data.map(tweet => <Tweet key={tweet.id} {...tweet} /> )}
    </div>
  )
}



export default Tweets;