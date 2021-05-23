
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profilesList, profilesCreate } from "../actions/profileDataActions";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FormFields } from "../utils";

const ProfileCreate = () => {
  const dispatch = useDispatch();

  const [fields, handleFieldChange] = FormFields({
    fullName: "",
    gender: "",
    citizenship: "",
    isActive: "",
});

  const handleSubmit = (e) =>{
    e.preventDefault();
    // window.location.reload();
    console.log("data", fields.fullName);
  };

  useEffect(() => {
    dispatch(profilesList());
  }, []);

  const getCurrentAPIDataState = useSelector(state => state.profileList.profiles);

  /*
  Since we do not have a proper backend
  to increment value of Data ID on Create,
  we will filter the highest value ID
  and increment the count afterwards
  */
  const findHighestIDValue = Math.max.apply(Math, getCurrentAPIDataState.map(function(element) { return element.id; }));

  const newProfile = {
    "id": findHighestIDValue + 1,
    "fullName": "Jerome Duboix",
    "gender": "M",
    "citizenship": "France",
    "isActive": true,
  };

//   getCurrentAPIDataState.push(newProfile);
//   dispatch(profilesCreate(getCurrentAPIDataState));


  return (
    <>
      <div className="Home mt-5 ml-5">
        <div className="container col-8 mt-5">
            <div className="signUpForm">
                <Form onSubmit={handleSubmit}>
                    <Form.Group role="form" size="sm" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            autoFocus
                            required
                            type="fullName"
                            value={fields.fullName}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group role="form" size="sm" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            autoFocus
                            required
                            type="gender"
                            value={fields.gender}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group role="form" size="sm" controlId="citizenship">
                        <Form.Label>Citizenship</Form.Label>
                        <Form.Control
                            required
                            type="citizenship"
                            value={fields.citizenship}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Form.Group role="form" size="sm" controlId="isActive">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            required
                            type="isActive"
                            value={fields.isActive}
                            onChange={handleFieldChange}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit">
                        Create New Profile
                    </Button>
                </Form>
            </div>
        </div>
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

export default ProfileCreate;
