import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import logo from './avatars/ava4.jpeg';
import logo3 from './avatars/ava3.jpeg';
import logo2 from './avatars/ava2.jpeg';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Mika" timeAgo="2 days ago at 5:17" comment="Nice!" avatar={logo}/>
      <CommentDetail author="Wade" timeAgo="yesterday at 7:48" comment="Rad!!" avatar={logo2}/>
      <CommentDetail author="Jack" timeAgo="yesterday at 2:00" comment="Murica!" avatar={logo3}/>
    </div>
  );  
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);