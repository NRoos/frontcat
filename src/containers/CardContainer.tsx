import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import Card from '../components/Card';
import FilterSelector from '../components/FilterSelector';
import NameSearch from '../components/NameSearch';
import { getBreeds, getByName } from '../util/api';

import { Breed } from '../types';

const formOptions = (breeds: Breed[]): string[] => {
  const all = ['All'].concat(breeds.map(breed => breed.origin));
  return Array.from(new Set(all));
}


const CardContainer = (): JSX.Element => {
  const [filter, setFilter] = useState('All');
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    getBreeds((breeds: Breed[]) => setBreeds(breeds));
  }, []);

  const searchByName = (text: string) => {
    if (text.trim() === '') return getBreeds((breeds: Breed[]) => setBreeds(breeds));
    getByName(text, (breed: [Breed]) => {
      setBreeds(breed);
    });
  }

  const sortedBreeds = breeds.length > 0 && filter !== 'All'
    ? breeds.filter(({ origin }) => origin === filter)
    : breeds

  return <Container>
    <FilterSelector value={filter} options={formOptions(breeds)} onSelect={setFilter} />
    <NameSearch callback={searchByName} />
    {sortedBreeds.length > 0
      ? sortedBreeds.map((b: Breed) => <Card key={v4()} breed={b} />)
      : <NotFound> No breeds found </NotFound>
    }
    </Container>
};

const Container = styled.div`
  margin-top: 15px;
  display: grid;
  justify-items: center;
`;

const NotFound = styled.p`
  font-size: 24px;
`;

export default CardContainer;