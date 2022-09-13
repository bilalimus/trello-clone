import { NavLink } from "react-router-dom";
import SignUp from "../components/Authentication/SignUp";
import PagesWrapper from "../components/Authentication/UI/PagesWrapper";

const RegisterPage = () => {
  return (
    <PagesWrapper>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account <NavLink to="/login">Sign in</NavLink>
      </p>
    </PagesWrapper>
  );
};

export default RegisterPage;
