import React from 'react';
import { useSelector } from 'react-redux';
import {selectPeople} from './peopleSlice';
import {Person} from './Person';

export const People=()=>{
    const people = useSelector(selectPeople);
return (<div key={people.id}>
    {people.children.map((personInfo)=>(<Person person={personInfo}/>))}</div>)
}
