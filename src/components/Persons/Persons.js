import React from 'react';
import Person from './person/person';
const persons = (props) => (
  props.persons.map( ( person, index ) => {
    return
     <Person key = {person.id}
       delete ={ props.deletePersonHandler.bind(this) }
       name = {person.name}
       age = {person.age}
       change = {( event ) => props.textChangeHandler( event, person.id )}
     />
      //whenever some enter data into input event get updated
  }
);
