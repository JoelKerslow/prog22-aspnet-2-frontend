//imports
import { useContext, useState, useRef } from "react";
import BackArrow from "../partials/generalPartials/BackArrow";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import ProfilePicture from "../partials/generalPartials/ProfilePicture";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";



const EditProfile = () => {

  const navigate = useNavigate();


  const fullNameRef = useRef();
  const { updateUserProfile } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleNameChange = (event) => {
    const name = fullNameRef.current.value;
    const [first, last] = name.split(" ");
    setFirstName(first);
    setLastName(last);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserProfile({ firstName, lastName });
  };

  const handleGoBack = () => {
    navigate(-1)
  };

  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow clickEvent={handleGoBack} />
              <h3>Edit profile</h3>
            </div>

            <VerticalBar />
            <ProfilePicture className={'fa-camera'}/>

            <form onSubmit={handleSubmit} method="post" className="form-editprofile">
            <div className="edit-profile-input input-field-group">
                <label>Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="John Doe"
                  ref={fullNameRef}
                  onChange={handleNameChange}
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Email</label>
                <input
                  type="Email"
                  className="input-field"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Phone number</label>
                <input
                  type="phone number"
                  className="input-field"
                  placeholder="+46 112 hjälp mig"
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Location</label>
                <input
                  type="Location"
                  className="input-field"
                  placeholder="Tenstavägen 24"
                />
              </div>

              <button className="BigBlackButton" type="submit">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
