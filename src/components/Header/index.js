import { Header as PageHeader, LogoContainer, StaredContainer, Star } from './styles';
import Button from '../Button';

import rain_logo from '../../assets/rain_logo.jpg';
import auth from '../../services/firebase';

import { FaHeart } from "react-icons/fa";

const Header = ({ history }) => {
  const redirToStared = () => {
    history.push('/stared');
  }

  return (
    <PageHeader>
      <LogoContainer>
        <img src={rain_logo} alt="Rain" />
        Rain Instant Pay Pokedex
      </LogoContainer>
      <StaredContainer>
        <Star onClick={redirToStared}>
          <FaHeart />
        </Star>
        <Button primary onClick={() => auth.auth().signOut()}>Sign Out</Button>
      </StaredContainer>

    </PageHeader>
  );
}

export default Header;
