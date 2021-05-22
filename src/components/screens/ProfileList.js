
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { apiData } from "../data";
import { profilesList } from "../actions/profileDataActions";
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesList());
  }, []);

  return (
    <>
      <div className="Home mt-5 ml-5">
        Current data:
        <ul>
        {apiData.map(profile=>(
          <li key={profile.id}>
            <Link to={`/profile/${profile.id}/`}>{profile.fullName}</Link> {profile.gender} {profile.citizenship} {profile.isActive}
          </li>
        ))}
        </ul>
        <br/>
        <br/>
        <Link to="/">Go to Home page</Link><br/>
      </div>
    </>
  );
}

export default Home;
