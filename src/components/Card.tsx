import React from 'react';
import styled from 'styled-components'; 

import { Breed } from '../types';

const Card = ({ breed }: { breed: Breed }) => {
  const {
    name,
    description,
    temperament,
    origin
  } = breed;
  return (
    <CardWrap>
      <Title> name: { name } </Title>
      <Description>  description: { description } </Description>
      <Temperament> temperament: { temperament } </Temperament>
      <Origin> origin: { origin } </Origin>
    </CardWrap>
  );
}

const Item = styled.div`
  padding: 4px;
  margin: 8px 0;
`;

const CardWrap = styled.div`
  display: grid;
  padding: 8px;
  margin: 10px;
  grid-template-areas:
    "title origin"
    "description description"
    "temperament temperament";

  grid-template-columns: 4fr 2fr;
  width: 90%;
  max-width: 700px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  :hover {
    color: red;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.03);
  }
`;

const Temperament = styled(Item)`
  grid-area: temperament;
`;

const Title = styled(Item)`
  grid-area: title;
`;

const Description = styled(Item)`
  grid-area: description;
`;

const Origin = styled(Item)`
  grid-area: origin;
`;

export default Card;