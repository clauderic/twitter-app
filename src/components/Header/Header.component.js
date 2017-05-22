import React from 'react';
import {Input, Radio} from 'antd';

const renderButtons = (users = []) => {
  return users.map(({fullname, username}, i) => {
    return <Radio.Button key={i} value={username}>{fullname}</Radio.Button>;
  });
};

const Header = ({fetchTweets, selected, users}) => {
  return (
    <header>
      <Radio.Group value={selected} onChange={e => fetchTweets(e.target.value)}>
        {renderButtons(users)}
      </Radio.Group>
      <Input.Search
        placeholder="Search username"
        style={{width: 200}}
        onSearch={fetchTweets}
      />
    </header>
  );
};

export default Header;
