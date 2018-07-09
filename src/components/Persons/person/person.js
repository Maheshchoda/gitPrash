import React from 'react';
import  './person.css';

const person = (props) => {
  return (
    <div>
      <input type ='text' onChange= {props.change} value={ props.name}/>
      <p className='Person' onClick={props.delete}>My name is {props.name} and age {props.age}</p>
    </div>
  );
};

export default person;
