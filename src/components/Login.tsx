import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { loginForm as LoginForm } from "../types/TypeList";
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

  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<LoginForm>({ mode: "onChange" }); // mode: "onChange"で入力時バリデーション

  return (
    <Fragment>
      <div className="cont">
        <div className="form sign-in">
          <h2>サインイン</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              {...register("emailSignIn", {
                required: "メールアドレスを入力して下さい",
              })}
            />
          </label>
          <p className="errMessage">
            {errors.emailSignIn?.message as React.ReactNode}
          </p>
          <label>
            <span>Password</span>
            <input
              type="password"
              {...register("passwordSignIn", {
                required: "パスワードを入力して下さい",
                minLength: { value: 6, message: "6文字以上で入力して下さい" },
              })}
            />
          </label>
          <p className="errMessage">
            {errors.passwordSignIn?.message as React.ReactNode}
          </p>
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
              <input
                type="text"
                {...register("usernameSignUp", {
                  required: "ユーザー名を入力して下さい",
                  minLength: {
                    value: 5,
                    message: "５文字以上で入力して下さい",
                  },
                })}
              />
            </label>
            <p className="errMessage">
              {errors.usernameSignUp?.message as React.ReactNode}
            </p>
            <label>
              <span>Email</span>
              <input
                type="email"
                {...register("emailSignUp", {
                  required: "メールアドレスを入力して下さい",
                })}
              />
            </label>
            <p className="errMessage">
              {errors.emailSignUp?.message as React.ReactNode}
            </p>
            <label>
              <span>Password</span>
              <input
                type="password"
                {...register("passwordSignUp", {
                  required: "パスワードを入力して下さい",
                  minLength: { value: 6, message: "6文字以上で入力して下さい" },
                })}
              />
            </label>
            <p className="errMessage">
              {errors.passwordSignUp?.message as React.ReactNode}
            </p>
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
