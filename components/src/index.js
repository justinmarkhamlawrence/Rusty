import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Mika"/>
      <CommentDetail author="Wade"/>
      <CommentDetail author="Jack"/>
    </div>
  );  
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);