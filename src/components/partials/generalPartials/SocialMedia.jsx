import React from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';
import Cookies from 'js-cookie';

const SocialMedia = () => {
  const responseGoogle = (response) => {
    console.log(response);
    Cookies.set('googleAuthToken', response.tokenId);
    // You can perform additional actions with the Google response here
  }

  const responseFacebook = (response) => {
    console.log(response);
    Cookies.set('facebookAuthToken', response.accessToken);
    // You can perform additional actions with the Facebook response here
  }

  const responseTwitter = (response) => {
    console.log(response);
    Cookies.set('twitterAuthToken', response.oauth_token);
    // You can perform additional actions with the Twitter response here
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="SocialMediaClass">
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
            cookiePolicy={'single_host_origin'}
          />
          <TwitterLogin
            loginUrl="Your-Twitter-Login-URL"
            onSuccess={responseTwitter}
            requestTokenUrl="Your-Twitter-Request-Token-URL"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
