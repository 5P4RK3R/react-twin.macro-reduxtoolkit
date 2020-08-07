import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {selectPerson,incrementScore} from './peopleSlice';

export const Person=({person})=>{
    const {id, properties:{ age,firstName,lastName,avatar}} = person;
    const personInfo = useSelector(selectPerson);
    const dispatch = useDispatch();
    console.log(personInfo)
    
    
    return (
    <div><div key={id}>
    <p>Name: {firstName.value +' ' + lastName.value}</p>
    <p>Score: {personInfo[age.value].initialValue}</p>
    <button
          
          aria-label="Increment value"
          onClick={() => dispatch(incrementScore(age.value))}
        >
          +
        </button>
    <img src={avatar.value}/>
</div>
        </div>
    )
}