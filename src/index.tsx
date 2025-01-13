import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hello from "./practice/Hello";
import Name from "./practice/Name";
import Message from "./practice/Message";
import ContainerSample from "./practice/ContainerSample";
import ContextSample from "./practice/ContextSample";
import CounterProps from "./practice/CounterProps";
import CounterProps2 from "./practice/CounterProps2";
import { Parent } from "./practice/Parent";
import { Parent2 } from "./practice/Parent2";
import { Button } from "./practice/Button";
import { UseMemoSample } from "./practice/UseMemoSample";
import { Clock } from "./practice/Clock";
import { Alice } from "./practice/UserName";
import { ImageUploader } from "./practice/UploadFile";
import { MessageDate } from "./practice/MessageDate";
import { Input } from "./practice/CustomHook";
import { Practice } from "./practice/Practice";
import { Sidebar } from "./components/Sidebar";
import { HomeMain } from "./components/HomeMain";
import SignInSignUp from "./components/Login";
import AppRoutes from "./components/AppRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppRoutes />

  // <HomeMain />
  // <Sidebar />
  // <Practice />
  // <Input />
  // <MessageDate />
  // <ImageUploader />
  // <Alice />
  // <Clock />
  // <UseMemoSample />

  // <Button />

  // <Parent2 initialValue={0} />

  // <Parent initialValue={0} />

  // <React.StrictMode>
  //   <CounterProps2 initialValue={0} />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <ContextSample />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <ContainerSample />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Message />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Name />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Hello />
  // </React.StrictMode>

  // <h1>見出し</h1>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
