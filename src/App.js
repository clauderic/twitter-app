import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';

import { fetchTweets }  from './actions/index.actions';

import Tweets from './components/Tweets/Tweets.component';
import Header from './components/Header/Header.component';

import './App.css';

const twitterUsers = [
  { fullname : 'Donald Trump' ,  username: 'realDonaldTrump' },
  { fullname : 'Hillary Clinton' ,  username: 'hillaryclinton' }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'realDonaldTrump'
    }
    this.fetchTweets = this.fetchTweets.bind(this);
  }
  componentDidMount() {
    this.fetchTweets(this.state.selected)
  }
  fetchTweets(value) {
    this.props.dispatch(fetchTweets(value));
    this.setState(Object.assign({}, { selected : value }))
  }

  render() {
    const {
      tweets = [],
      isFetching,
      errors
    } = this.props;

    return (
      <div className="App">
        <Header
          fetchTweets={this.fetchTweets}
          selected={this.state.selected}
          users={twitterUsers}
        />
        { renderTweets({ data : tweets, errors, isFetching }, Tweets) }
      </div>
    );
  }
}


function renderTweets ({ errors, isFetching, data }, Component) {
  if (isFetching === true) return <Spin/>
  else if(errors) return  <AlertError/>
  else if(data.length === 0 && isFetching === false) return <AlertWarning/>
  else return <Component data={data}/>
}

const AlertWarning = () => {
  return(
  <Alert
    message="Warning"
    description="No tweets :("
    type="warning"
    showIcon
  />
  )
}

const AlertError = () => {
  return(
  <Alert
      message="Error"
      description="Username doesn't exist"
      type="error"
      showIcon
    />
  )
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = state => {
  return {
    ...state.tweets
  }
}

App = connect(mapStateToProps)(App)

export default App;
