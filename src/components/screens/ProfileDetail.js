import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiData } from "../data";

const ProfileDetail = () => {
  const { id } = useParams();

  return (
    <div className="App">
      Profile id: <b>{ id }</b>
      <br/>
      <br/>
      <Link to="/profile">Go to Profile List page</Link><br/>
    </div>
  );
}

export default ProfileDetail;
