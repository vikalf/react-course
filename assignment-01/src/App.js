import React, { useState } from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import UserInput from './UserInput/UserInput';

const App = props => {

  const [username, setusername] = useState('enter something');

  const setUsernameHandler = (event) => {
    setusername(event.target.value);
  };


  return (
    <div className="App">
      <UserInput username={username} changed={setUsernameHandler}></UserInput>
      <UserOutput username={username}>Text 1</UserOutput>
      <UserOutput username={username}>Text 2</UserOutput>
      <UserOutput username={username}>Text 3</UserOutput>
    </div>
  );
}

export default App;
