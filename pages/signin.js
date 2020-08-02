import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
// clientID: 983727122049761,
//       clientSecret: "bb75902f8a52abfd758fcaa06e746d4a",
//       callbackURL: "http://localhost:3000/auth/facebook/callback",
export default function signin() {
  const responseFacebook = (response) => {
    console.log("login result", response);
    dispatch({ type: "CLIENT_FACEBOOK_LOGIN", payload: response });
    Cookie.set("facebookUser", JSON.stringify(response));
  };
  const dispatch = useDispatch();
  const componentClicked = (data) => {};
  return (
    <FacebookLogin
      appId="983727122049761"
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}
