import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

type Breed = {
  id: Number,
  name: String,
  description: String,
  temperament: String,
  origin: String,
};

const breeds: Breed[] = [
  {
    id: 1,
    name: 'tabby',
    description: 'very annyoing, also ugly',
    temperament: 'not very high at all',
    origin: 'unknown',
  },
  {
    id: 2,
    name: 'not-tabby',
    description: 'very annyoing, also very pretty, also we need a lot longer text',
    temperament: 'haha yes',
    origin: 'tabby',
  },
];

const CardContainer = (): JSX.Element => {
  return <Container>
    {breeds.length > 0
      ? breeds.map(b => <Card breed={b} />)
      : <NotFound> No breeds found </NotFound>
    }
    </Container>
};

const Container = styled.div`
  display: grid;
  justify-items: center;
`;

const NotFound = styled.p`
  font-size: 24px;
`;

export default CardContainer;