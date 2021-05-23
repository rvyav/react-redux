
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiData } from "../data";
import { profilesList } from "../actions/profileDataActions";
import { Link } from 'react-router-dom';

const ProfileUpdate = () => {

  return (
    <>
      <div className="Home mt-5 ml-5">
        UPDATE HERE
        <br/>
        <br/>
        <Link to="/profile/">Go to Profile List page</Link><br/>
        <br/>
        <br/>
        <Link to="/">Go to Home page</Link><br/>
      </div>
    </>
  );
}

export default ProfileUpdate;
