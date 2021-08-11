import { Header as PageHeader } from './styles';
import rain_logo from '../../assets/rain_logo.jpg';

const Header = () => {
  return (
    <PageHeader>
      <img src={rain_logo} alt="Rain" />
      Rain Instant Pay Pokedex
    </PageHeader>
  );
}

export default Header;
