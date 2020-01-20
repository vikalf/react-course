import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import Person from './Person/Person'
import Validation from './Validation/Validation'
import Char from './CharComp/CharComp'


class App extends Component {

  state = {
    username: 'UserName1',
    showUsername: false,
    showPersons: false,
    persons: [
      { id: 1, name: 'Victor', age: 30 },
      { id: 2, name: 'Maximilian', age: 17 }
    ],
    inputValue: ''
  };

  changePersonNameHandler = (event, index) => {
    const value = event.target.value;

    const persons = [...this.state.persons];
    persons[index].name = value;

    this.setState({ persons: persons });

  }

  changeUsernameHandler = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
      showUsername: this.state.showUsername
    });
  }

  toggleUsernameHandler = () => {
    const doesShow = this.state.showUsername;
    this.setState({
      username: 'UserName1',
      showUsername: !doesShow
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({ persons: persons });

  }

  getUserNameArea = () => {

    if (this.state.showUsername) {

      const userNameArea = (
        <div>
          <UserInput
            username={this.state.username}
            changeUsername={this.changeUsernameHandler}>
          </UserInput>

          <UserOutput username={this.state.username}>this is output</UserOutput>
          <UserOutput username={this.state.username}>this is output</UserOutput>
          <UserOutput username={this.state.username}>this is output</UserOutput>
        </div>
      );

      return userNameArea;

    }
    else {
      return null;
    }

  }

  getPersonsArea = () => {

    if (this.state.showPersons) {
      const area = this.state.persons.map((person, index) => {
        return (
          <Person
            deleteClickHandler={() => this.deletePersonHandler(index)}
            change={(event) => this.changePersonNameHandler(event, index)}
            name={person.name}
            age={person.age}
            key={person.id}></Person>
        );
      });

      return area;
    }
    else {
      return null
    }
  }

  

  changeInputAreaCount = (event) => {
    const value = event.target.value;

    this.setState({ inputValue: value });
  }


  removeCharacter = (event, index) => {

    const inputStr = this.state.inputValue;
    let result = '';

    for (let i = 0; i < inputStr.length; i++) {

      if (index !== i) {
        result = result.concat(inputStr[i])
      }

    }

    this.setState({ inputValue: result });

  }


  getCharactersArea = () => {

    const inputText = this.state.inputValue;

    let charAreas = [];

    for (let index = 0; index < inputText.length; index++) {
      charAreas.push((
      <Char className="Char" 
      character={inputText[index]}
      clickCharacter={(event) => this.removeCharacter(event, index)}
      key={index}>
      </Char>
      ));
    }

    return charAreas;
  }

  getInputCountArea = () => {
    return (
      <div>
        <input type="text" onChange={this.changeInputAreaCount} value={this.state.inputValue}></input>
        <p>Lenght is: {this.state.inputValue.length}</p>
        <Validation charLenght={this.state.inputValue.length}></Validation>
        {this.getCharactersArea()}
      </div>
    );
  }

  render() {

    const userNameArea = this.getUserNameArea();
    const personsArea = this.getPersonsArea();
    const inputCountArea = this.getInputCountArea();

    return (
      <div className="App">
        <h1>Username Assignment</h1>
        <button onClick={this.toggleUsernameHandler}>{this.state.showUsername ? 'Hide' : 'Show'}</button>
        {userNameArea}
        <hr></hr>
        <button onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide' : 'Show'}</button>
        {personsArea}
        <hr></hr>
        {inputCountArea}

      </div>
    );
  }
}

export default App;
