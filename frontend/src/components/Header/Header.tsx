import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { logout } from "../../redux/actionCreators/authCreators";

import logo from "../../assets/images/icons/logo.png";

import "./style.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { appearance } = useSelector((state: RootState) => state.interface.data);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header__container">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <div className="header__text-logo">
            <h2>{appearance?.text}</h2>
            <h4>центр надання адміністративних послуг</h4>
          </div>      
        </div>

        <button
          className={`header__button-${isAuth ? "logout" : "login"}`}
          title={isAuth ? "Logout" : "Login"}
          onClick={isAuth ? handleLogout : handleLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path
              d={
                isAuth
                  ? "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                  : "M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
              }
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
