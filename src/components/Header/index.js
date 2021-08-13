import { useContext } from 'react';
import { Header as PageHeader, LogoContainer, StaredContainer, Star } from './styles';
import Button from '../Button';

import { Link } from 'react-router-dom'

import rain_logo from '../../assets/rain_logo.jpg';
import auth from '../../services/firebase';

import { FaHeart } from "react-icons/fa";

import { AuthContext } from '../../state/providers/auth'; 

const Header = () => {
  const { logedIn } = useContext(AuthContext);

  return (
    <PageHeader>
      <LogoContainer>
        <img src={rain_logo} alt="Rain" />
        Rain Instant Pay Pokedex
      </LogoContainer>
      { logedIn && <StaredContainer>
        <Link to='/stared'>
          <Star>
            <FaHeart />
          </Star>
        </Link>
        <Button primary onClick={() => auth.auth().signOut()}>Sign Out</Button>
      </StaredContainer> }

    </PageHeader>
  );
}

export default Header;
