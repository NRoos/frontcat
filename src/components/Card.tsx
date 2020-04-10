import React from 'react';
import styled from 'styled-components'; 

type Breed = {
  id: Number,
  name: String,
  description: String,
  temperament: String,
  origin: String,
};

const Card = ({ breed }: { breed: Breed }) => {
  const {
    name,
    description,
    temperament,
    origin
  } = breed;
  return (
    <CardWrap>
      <Title> { name } </Title>
      <Description> { description } </Description>
      <Temperament> { temperament } </Temperament>
      <Origin> { origin } </Origin>
    </CardWrap>
  );
}

const Item = styled.div`
  padding: 4px;
`;

const CardWrap = styled(Item)`
  display: grid;
  grid-template-areas:
    "title origin"
    "description description"
    "temperament .";

  grid-template-columns: 4fr 2fr;
  border: 1px solid red;
  max-width: 750px;
  width: 90vw;
  border-radius: 15px;
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