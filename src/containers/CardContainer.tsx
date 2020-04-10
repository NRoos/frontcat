import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import Card from '../components/Card';
import FilterSelector from '../components/FilterSelector';
import NameSearch from '../components/NameSearch';
import { getBreeds } from '../util/api';

import { Breed, Option } from '../types';

const formOptions = (breeds: Breed[]): Option[] => {
  return [{ value: 'All'}].concat(breeds.map(breed => {
    return { value: breed.origin }
  }));
}

const CardContainer = (): JSX.Element => {
  const [filter, setFilter] = useState('All');
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const options = formOptions(breeds);

  useEffect(() => {
    getBreeds((breeds: Breed[]) => setBreeds(breeds));
  }, []);

  const sortedBreeds = breeds.length > 0 && filter !== 'All'
    ? breeds.filter((b: Breed) => b.origin === filter)
    : breeds

  return <Container>
    <FilterSelector options={options} onSelect={setFilter} />
    <NameSearch callback={setBreeds} />
    {sortedBreeds.length > 0
      ? sortedBreeds.map((b: Breed) => <Card key={v4()} breed={b} />)
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