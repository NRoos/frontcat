import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import Card from '../components/Card';
import getBreeds from '../util/api';

type Breed = {
  id: Number,
  name: String,
  description: String,
  temperament: String,
  origin: String,
};

const CardContainer = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    getBreeds((breeds: Breed[]) => setBreeds(breeds));
  }, []);


  const sortedBreeds = breeds.length > 0 && filter.length >  0
    ? breeds.filter(b => b.origin === filter)
    : breeds

  return <Container>
    {sortedBreeds.length > 0
      ? sortedBreeds.map(b => <Card key={v4()} breed={b} />)
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