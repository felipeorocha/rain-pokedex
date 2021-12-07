import { useState } from 'react';
import {
  CardContainer,
  CardInfo,
  CardTypes
} from './styles';

import { FaHeart } from "react-icons/fa";

import { useStared } from '../../state/providers/stared';

const Card = ({ pokemon }) => {
  const [selected, setSelected] = useState(false);
  const { stared, addPoke } = useStared();
  console.log('STARED TEST', stared);
  
  
  const handleSelect = () => {
    setSelected(!selected);
    addPoke(pokemon);
  };

  return (
    <CardContainer onClick={handleSelect} selected={selected}>
      <FaHeart />
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card__name">
        {pokemon.name}
      </div>
      <CardTypes>
        {pokemon.types.map(type => {
          return (
            <div className="Card__type-label">
              {type.type.name}
            </div>
          )
        })}
      </CardTypes>
      <CardInfo>
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
