import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
    
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        marginBottom: '10px'
    };

    const [ personState, setPersonsState ] = useState({
        persons: [
            {id: 1, name: 'Max', age: 29},
            {id: 2, name: 'John', age: 23},
            {id: 3, name: 'Mary', age: 30},
        ],
        otherState : 'hello world',
        showsPersons: false
    });

    const togglePersonsHandler = () => {

        const newState = {...personState};
        newState.showsPersons = !personState.showsPersons;
        setPersonsState(newState);
    };

    const deletePersonHandler = (personIndex) => {
        const newState = {...personState};
        newState.persons.splice(personIndex, 1);
        setPersonsState(newState);
    };

    const nameChangedHandler = (event, id) => {
        const newState = {...personState};

        const personIndex = newState.persons.findIndex(p => {
            return p.id === id;
        });

        const person = newState.persons[personIndex];
        person.name = event.target.value;

        setPersonsState(newState);

    };

    let persons = null;

    if (personState.showsPersons) {
        persons = (
            <div>
                {
                    personState.persons.map(
                        (person, index) => 
                            <Person 
                                key={person.id}
                                click={() => deletePersonHandler(index)} 
                                name={person.name} 
                                age={person.age} 
                                changed={(event) => nameChangedHandler(event, person.id)}/> 
                    )
                }
            </div>
           );
    }

    return ( 
        <div className = "App" >
            <h1>Hi, I'm a react app</h1>
            <p>This is really working</p>
            <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
            {persons}                
        </div>
        );    
}

export default App;