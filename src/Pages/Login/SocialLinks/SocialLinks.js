import React from "react";
import {
  // useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLinks = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  //   const [signInWithFacebook, user, loading, error] =
  //     useSignInWithFacebook(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading />;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-red-500 text-center text-sm">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/");
  }
  return (
    <div>
      <div className="toggle-link flex items-center justify-center">
        <div className="border w-full"></div>
        <div className="m-3 text-base">Or</div>
        <div className="border w-full"></div>
      </div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
                  bg-white text-black rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
      >
        <img
          className="w-1/12 mr-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAbZUfVUgAB3F7PrFvnrseBXmYJ2goO2-jGeIBH5sqD8nD_ZyCC8MAI1jzQo3ZnnCQrE&usqp=CAU"
          alt=""
        />
        Continue With Google
      </button>
      <button
        className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
                  bg-white text-black rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
      >
        <div className="w-1/12 mr-2" style={{ padding: "3px" }}>
          <img src={facebook} alt="" />
        </div>
        Continue With Facebook
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
                  bg-white text-black rounded-full hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
      >
        <img src={github} className="w-1/12 mr-2" alt="" />
        Continue With Github
      </button>
    </div>
  );
};

export default SocialLinks;
