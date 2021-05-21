import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "./components/Data";
import { profilesList } from "../src/components/actions/profileDataActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesList());
  }, [dispatch]);

  return (
    <div className="App mt-5 ml-5">
      Current data:
      <ul>
       {apiData.map(profile=>(
         <li key={profile.id}>{profile.fullName} {profile.gender} {profile.citizenship} {profile.isActive}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
