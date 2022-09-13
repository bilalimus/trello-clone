import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert('Invalid user!'));
  };

  return <Form title="Sign in" handleClick={handleLogin} />
};

export default Login;
