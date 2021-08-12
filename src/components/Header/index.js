import { Header as PageHeader, LogoContainer } from './styles';
import Button from '../Button';

import rain_logo from '../../assets/rain_logo.jpg';
import auth from '../../services/firebase';

const Header = () => {
  return (
    <PageHeader>
      <LogoContainer>
        <img src={rain_logo} alt="Rain" />
        Rain Instant Pay Pokedex
      </LogoContainer>
      <div>
        <Button primary onClick={() => auth.auth().signOut()}>Sign Out</Button>
      </div>

    </PageHeader>
  );
}

export default Header;
