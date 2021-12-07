import { useStared } from '../../state/providers/stared';
import Card from '../../components/Card';
import { GridContainer } from '../../pages/Home/styles';
import Button from '../../components/Button';

const Stared = ({ history }) => {
  const { stared } = useStared();
  console.log('stared state', stared);

  const staredItems = JSON.parse(localStorage.getItem('@stared-pokemons'));

  const redirToHome = () => {
    history.push('/');
  }

  const emptyStared = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
        <h2 style={{ textAlign: 'center' }}>
          Empty stared list...
        </h2>
        <Button onClick={redirToHome}>Back to home</Button>
      </div>
    );
  }

  return (
    <>
      <GridContainer>
        {!staredItems.length ? emptyStared() : staredItems.map((poke, index) => {
          return <Card key={index} pokemon={poke} stared={stared} />          
        })}
      </GridContainer>
      <Button onClick={redirToHome}>Back to home</Button>  
    </>
  );

}

export default Stared;
