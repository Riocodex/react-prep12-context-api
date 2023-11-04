import React from 'react'
import { useContext } from  "react";
import { UserData } from '../contexts/GlobalContext';
import { Settings } from './Settings';

export const Home = () => {
    let {name} = useContext(UserData)
  return (
    <div>
       <h1> My name is {name}</h1>
       <Settings/>
    </div>
    
  )
}
