import React, { Component } from 'react';

// eslint-disable-next-line

import './App.css';
import Person from '../components/Persons/person/person';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Mahesh',
        age: 25,
      }, {
        id: 2,
        name: 'Suresh',
        age: 21,
      }, {
        id: 3,
        name: 'Rajesh',
        age: 28,
      },
    ],
    anotherState: 'some other value',
    showPersons: true,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons].slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  textChangeHandler = (event, id) => {
    //we are finding Index of prfiles and checking with the id coming from click
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //now we are assigning a copy of persons (and also
    //finding the index)  to the person with the spread operator
    const person = {
      ...this.state.persons[personIndex],
    };

    //changing the person name based on input
    person.name = event.target.value;

    const persons = [...this.state.persons];

    //updating the person
    persons[personIndex] = person;

    //now we are finally updating
    this.setState({ persons: persons });

  };

  togglePersonsHandler = () => {
    const  display = this.state.showPersons;
    this.setState({ showPersons: !display });
  };

  render() {
    return (
    <div className = 'App' >
      <h1>Wlecome to React</h1>
      <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {
        this.state.<Persons/>
      }
    </div>
   );

  }
}

//After writing the above code it will automatically switch to the below one with babel loader
// return React.createElement('div',
//{ className: 'App' },React.createElement('h1', null, 'Hello there'));
export default App;
