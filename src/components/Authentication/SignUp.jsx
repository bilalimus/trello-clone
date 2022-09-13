import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { userActions } from "../../store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/')
      })
      .catch(console.error);
  };

  return <Form title="Sign in" handleClick={handleRegister} />;
};

export default SignUp;
