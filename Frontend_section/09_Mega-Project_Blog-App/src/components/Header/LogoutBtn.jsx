import React from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button>Logout</button>
    </>
  );
};

export default LogoutBtn;
