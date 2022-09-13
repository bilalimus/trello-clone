import {NavLink} from "react-router-dom"
import Login from "../components/Authentication/Login";
import PagesWrapper from "../components/Authentication/UI/PagesWrapper";

const LoginPage = () => {
    return (
        <PagesWrapper>
            <h1>Login</h1>
            <Login />
            <p>Or <NavLink to={'/register'}>Register</NavLink> </p>
        </PagesWrapper>
    );
};

export default LoginPage;