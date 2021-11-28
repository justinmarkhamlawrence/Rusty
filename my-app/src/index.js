import React from 'react';
import ReactDOM from 'react-dom';

//if (module.hot){
//    module.hot,accept();
//}

function getButtonText(){
    return 'Click Me!';
}

const App = () => {
  return (
  <div>
    <label className="label" htmlFor='name'>
      Enter Name:
    </label>
    <input id="name" type="text"></input>
    <button style={{ backgroundColor: 'blue' ,color: 'white'}}>{getButtonText()}</button>
  </div>
   );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)