import React from 'react'
import { useContext } from  "react";
import { UserData } from '../contexts/GlobalContext';

export const Settings = () => {
    let {name,age} = useContext(UserData)
    
  return (
    <div>
        <h2>Settings {age}</h2>
    </div>
  )
}
