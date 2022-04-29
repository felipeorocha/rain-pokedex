import { useState } from 'react';
import {
  CardContainer,
  CardInfo,
  CardTypes
} from './styles';

import { FaHeart } from "react-icons/fa";

import { useStared } from '../../state/providers/stared';

const Card = ({ pokemon, stared: choosen, choosenStared }) => {
  const [selected, setSelected] = useState(false);
  const { stared, addPoke, removePoke } = useStared();

  const { name, sprites, types, weight, height, abilities } = pokemon
  
  const handleSelect = () => {
    setSelected(!selected);

    return stared.map(item => item.name).includes(name) ? removePoke(pokemon) : addPoke({ name, sprites, types, weight, height, abilities })
  };

  return (
    <CardContainer onClick={handleSelect} selected={selected || choosenStared} stared={choosen}>
      <FaHeart />
      <div className="Card__img">
        <img src={sprites.front_default} alt="" />
      </div>
      <div className="Card__name">
        {name}
      </div>
      <CardTypes>
        {types.map(type => {
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
          <p>{weight}</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Height</p>
          <p>{height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{abilities[0].ability.name}</p>
        </div>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
