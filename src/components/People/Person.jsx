import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectPerson,incrementScore} from './peopleSlice';

export const Person=({person})=>{
    const {id, properties:{ age,firstName,lastName,avatar}} = person;
    const personInfo = useSelector(selectPerson);
    const dispatch = useDispatch();
    return (
    <div>
    <div key={id}>
    <p>Name: {firstName.value +' ' + lastName.value}</p>
    <div className="row">
    <p>Score: {personInfo[age.value].initialValue}</p>
    <button aria-label="Increment value"
          onClick={() => dispatch(incrementScore(age.value))}
        >
          +
        </button>
    </div>
    <img src={avatar.value} alt=""/>
    </div>
        </div>
    )
}