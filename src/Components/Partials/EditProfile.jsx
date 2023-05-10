//imports
import BackArrow from "./GeneralPartials/BackArrow";
import VerticalBar from "./GeneralPartials/VerticalBar";
import ProfilePicture from "./GeneralPartials/ProfilePicture";

const Registration = () => {

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Edit profile</h3>
            </div>

            <VerticalBar />
            <ProfilePicture/>

            <form onSubmit="" method="post" className="form-editprofile">
              <div className="edit-profile-input input-field-group">
                <label>Name</label>
                <input
                  type="Name"
                  className="input-field"
                  placeholder="John Doe"
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
export default Registration;
