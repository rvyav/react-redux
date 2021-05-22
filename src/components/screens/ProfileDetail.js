import React, { useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { profilesDetails } from "../actions/profileDataActions";

const ProfileDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesDetails(id));
  }, []);

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
