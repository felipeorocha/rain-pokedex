import { useCallback } from "react";
import { withRouter } from "react-router";
import authentication from '../../services/firebase';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button';
import {
  GridContainer,
  InputsContainer,
  ButtonsContainer,
  ImageAnimation
} from '../Login/styles';

import pokeball from '../../assets/pokeball.png';

toast.configure();

const SignUp = ({ history }) => {
  const notify = (notification, type) => toast[type](notification, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }
  );

  const handleSignUp = useCallback(async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await authentication
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      notify('User successfully created!', 'success');
      history.push('/');
    } catch (error) {
      console.error(error);
      notify(error.message, 'error');
    }
  }, [history]);

  const redirToLogin = () => {
    history.push('/login');
  }

  return (
    <GridContainer>
      <ImageAnimation src={pokeball} />
      <form onSubmit={handleSignUp}>
        <InputsContainer>
          <label>
            Email:
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password:
            <input name="password" type="password" placeholder="Password" />
          </label>
        </InputsContainer>
        <ButtonsContainer>
          <Button className="btn--login" type="submit" primary>Sign up</Button>
          <span>Already have an account?</span>
          <Button className="btn--login" onClick={redirToLogin}>Log in</Button>
        </ButtonsContainer>
      </form>
    </GridContainer>
  );
};

export default withRouter(SignUp);