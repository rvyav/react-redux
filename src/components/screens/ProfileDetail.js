import React, { useEffect }  from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { profilesList, profilesDetails, profilesDelete } from "../actions/profileDataActions";
import { Button } from "react-bootstrap";

const ProfileDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(profilesList());
    dispatch(profilesDetails(id));
  }, [dispatch, id]);

  const getCurrentAPIDataState = useSelector(state => state.profileList.profiles);
  
  const handleRemoveCurrentID = () => {
    const findID = getCurrentAPIDataState.filter(element => element.id !== parseInt(id));
    dispatch(profilesDelete(findID));
    history.push("/profile/");
  }

  return (
    <div className="App">
      Profile id: <b>{ id }</b>
      <br/>
        <div className="col-3 mt-5">
          <Button variant="danger" block size="sm" type="submit" onClick={handleRemoveCurrentID}>
            <b>Delete Profile</b>
          </Button>
        </div>
      <br/>
      <br/>
      <Link to="/profile">Go to Profile List page</Link><br/>
      <br/>
      <br/>
      <Link to="/">Go to Home page</Link><br/>
    </div>
  );
}

export default ProfileDetail;
