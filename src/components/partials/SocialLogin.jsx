import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import TwitterLogin from 'react-twitter-login';

const SocialLogin = () => {

  const responseFacebook = (response) => {
    console.log(response);
    // Send this response to your backend for further processing.
  }

  const responseGoogle = (response) => {
    console.log(response);
    // Send this response to your backend for further processing.
  }

  const authHandler = (err, data) => {
    console.log(err, data);
    // Send 'data' to your backend for further processing.
  };

  return (
    <div>
      <FacebookLogin
        appId="261209846406173"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <GoogleLogin
        clientId="602381374814-np3e5vttc0i08g58loadea4fosuc867q.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <TwitterLogin
        consumerKey="YBYk0sGYI1C6Ljma0Y9O5ATh5"
        consumerSecret="8ynFIIuzYdKuEfessAA0DBp6FbeS3wAXDxctA7Hq6IGv0GJW2E"
        authCallback={authHandler}
        children={<button>Login with Twitter</button>}
      />
    </div>
  );
}

export default SocialLogin;
