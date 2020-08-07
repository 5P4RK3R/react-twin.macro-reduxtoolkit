import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {componentPayload} from '../../data/componentPayload';
import {selectPeople} from './peopleSlice';
import {Person} from './Person';
import { useEffect } from 'react';

export const People=()=>{
    const people = useSelector(selectPeople);
return (<div>
    {people.children.map((personInfo)=>(<Person person={personInfo}/>))}</div>)
}
