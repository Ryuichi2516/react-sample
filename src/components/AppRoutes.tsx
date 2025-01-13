import { Routes, Route } from "react-router-dom";
import SignInSignUp from "./Login";
import { HomeMain } from "./HomeMain";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/homeMain" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
