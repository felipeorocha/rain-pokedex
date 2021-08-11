import pokeball from '../../assets/pokeball.png';
import './styles.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <img className="logo bounce" src={pokeball} alt="pokeball" />
    </div>
  );
}

export default Loader;
