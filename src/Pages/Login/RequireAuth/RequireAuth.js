import React from "react";
import { ToastContainer } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (
    user?.providerData[0]?.providerId === "password" &&
    !user?.emailVerified
  ) {
    return (
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-red-500">Your Email is not varified</h3>
        <h4>Please Verify Your Email Address</h4>
        <button
          className="px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-700 font-semibold uppercase text-white"
          onClick={async () => {
            await sendEmailVerification();
            toast("Verification Email Sent");
          }}
        >
          Sent Verification Email
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
