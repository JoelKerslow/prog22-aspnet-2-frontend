//imports
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../partials/generalPartials/BackArrow";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import ProfilePicture from "../partials/generalPartials/ProfilePicture";
import { UserContext, CurrentUser } from "../../contexts/UserContext";

const EditProfile = () => {

  const fullNameRef = useRef();
  const imageUrlRef = useRef();
  const { updateUserProfile, currentUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  
  const clickEventArrow = () => {
    navigate("/Profile");
  };
  
  const handleNameChange = (event) => {
    const name = fullNameRef.current.value;
    const [first, last] = name.split(" ");
    setFirstName(first);
    setLastName(last);
    setUserId(currentUser.id);
    setImageUrl(imageUrlRef.current.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUserProfile(userId, firstName, lastName, imageUrl);
    navigate(-1);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow clickEvent={clickEventArrow}/>
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
                  placeholder={`${currentUser.firstName} ${currentUser.lastName}`}
                  ref={fullNameRef}
                  onChange={handleNameChange}
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Email</label>
                <input
                  type="Email"
                  className="input-field"
                  placeholder={`${currentUser.email}`}
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Phone number</label>
                <input
                  type="phone number"
                  className="input-field"
                  placeholder={`${currentUser.number}`}
                />
              </div>
              <div className="edit-profile-input input-field-group">
                <label>Location</label>
                <input
                  type="Location"
                  className="input-field"
                  placeholder={`${currentUser.address}`}
                />
              </div>

              <div className="edit-profile-input input-field-group">
                <label>ImageUrl</label>
                <input
                  type="imageUrl"
                  className="input-field"
                  ref={imageUrlRef}
                  placeholder="Profile picture"
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
