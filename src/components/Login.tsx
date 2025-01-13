import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

const SignInSignUp = () => {
  const navigate = useNavigate();
  const handleHomeMain = () => {
    navigate("/HomeMain");
  };

  useEffect(() => {
    document.querySelector(".img__btn")?.addEventListener("click", () => {
      document.querySelector(".cont")?.classList.toggle("s--signup");
    });
  }, []);

  return (
    <Fragment>
      <div className="cont">
        <div className="form sign-in">
          <h2>サインイン</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit" onClick={handleHomeMain}>
            Sign In
          </button>
          <button type="button" className="fb-btn">
            Connect with <span>facebook</span>
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>
                アカウントをお持ちでない場合は、新しくアカウント作成してください。
              </h2>
            </div>
            <div className="img__text m--in">
              <h2>
                すでにアカウントをお持ちの場合は、サインインしてください。
              </h2>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>サインアップ</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <button type="button" className="submit" onClick={handleHomeMain}>
              Sign Up
            </button>
            <button type="button" className="fb-btn">
              Join with <span>facebook</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInSignUp;
