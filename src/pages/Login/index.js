import { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import authentication from "../../services/firebase";
import { AuthContext } from "../../state/providers/auth";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button';
import { ButtonsContainer, GridContainer, InputsContainer } from "./styles";

import pokemonLogo from '../../assets/pokemon-logo.png';
toast.configure();

const Login = ({ history }) => {

  const notify = notification => toast.error(notification, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }
  );

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await authentication
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        console.error(error);
        notify(error.message);
      }
    },
    [history]
  );

  const { logedIn } = useContext(AuthContext);

  if (logedIn) {
    return <Redirect to="/" />;
  }

  const redirToSignUp = () => {
    history.push('/sign-up');
  }

  return (
    <GridContainer>
      <img src={pokemonLogo} alt="Pokemon" />
      <form onSubmit={handleLogin}>
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
          <Button className="btn--login" type="submit" primary>Log in</Button>
          <span>Not registered yet?</span>
          <Button className="btn--login" onClick={redirToSignUp}>Sign up</Button>
        </ButtonsContainer>
      </form>
    </GridContainer>
  );
};

export default withRouter(Login);