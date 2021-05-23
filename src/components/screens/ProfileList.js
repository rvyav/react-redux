
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profilesList } from "../actions/profileDataActions";
import { Link } from 'react-router-dom';

const ProfileList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesList());
  }, [dispatch]);

  const getCurrentAPIDataState = useSelector(state => state.profileList.profiles);

  return (
    <>
      <div className="Home mt-5 ml-5">
        Current data:
        <ul>
        {getCurrentAPIDataState.map(profile=>(
          <li key={profile.id}>
            <Link to={`/profile/${profile.id}/`}>{profile.fullName}</Link> {profile.gender} {profile.citizenship} {profile.isActive}
          </li>
        ))}
        </ul>
        <br/>
        <br/>
        <Link to="/profile/create">Create New Profile</Link><br/>
        <br/>
        <br/>
        <Link to="/">Go to Home page</Link><br/>
      </div>
    </>
  );
}

export default ProfileList;
