import React from 'react'
import { useContext } from  "react";
import { UserData } from '../contexts/GlobalContext';


export const Profile = () => {
    let { setName } = useContext(UserData);
  return (
    <div>
        <button onClick={()=>setName("Ogsir")}>Change Name</button>
    </div>
  )
}
