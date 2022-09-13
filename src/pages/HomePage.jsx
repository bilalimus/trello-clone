import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { userActions } from "../store/userSlice";
import Main from "../components/Lists/Main";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return true ? (
    <>
      <NavBar>
        <LogoDiv>
          <img src={logo} alt="logo" width={30} />
        </LogoDiv>
        <LogOutDiv>
          <EmailTitle>{email}</EmailTitle>
          <LogoutBtn onClick={() => dispatch(userActions.removeUser())}>
            Logout
          </LogoutBtn>
        </LogOutDiv>
      </NavBar>
      <MainDiv>
        <Main />
      </MainDiv>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;

const LogoutBtn = styled.button`
  display: inline-block;
  width: 75px;
  font-weight: bold;
  padding: 8px;
  color: black;
  border: 3px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
  &:hover,
  &:active {
    background-color: #fff;
    color: #026aa7;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
  }
`;

const LogoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
`;

const LogOutDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const EmailTitle = styled.h3`
  color: white;
  margin-right: 10px;
`;

const NavBar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #026aa7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

const MainDiv = styled.div`
  display: flex;
  margin-left: 50px;
`;
