import React, { useState } from 'react';
import InputValidation from './InputValidation/InputValidation'
import CharComponent from './CharComponent/CharComponent'
import './App.css';


const App = (props) => {


  const [inputTextState, setinputTextState] = useState('');

  const textChangeHandler = (event) => {
    const text = event.target.value;
    setinputTextState(text);
  };

  const removeLetterHandler = (index) => {
    let tmp = inputTextState.split(''); 
    tmp.splice(index - 1 , 1); 
    setinputTextState(tmp.join('')); 
  };

  let charComponents = null;

  if(inputTextState.length > 0) {
     charComponents = (
       <div>
            {
              inputTextState.split('').map((letter, index) => 
              <CharComponent clickHandler={removeLetterHandler} key={index} id={index} letter={letter} />
              )
            }  
       </div>
     );
   };
  

  return (
    <div className="App">
      <input type="text" value={inputTextState} onChange={(event) => textChangeHandler(event)} />
      <InputValidation inputLength={inputTextState.length} />
      {charComponents}
    </div>
  );
}

export default App;
