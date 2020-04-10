import React, { useState } from 'react';
import styled from 'styled-components';

import { getBreeds, getByName } from '../util/api';

import { Breed } from '../types';

type NameSearchProps = {
  callback: Function
};

const NameSearch = (props: NameSearchProps) => {
  const { callback } = props;
  const [text, setText] = useState('');

  const handleSubmit = (text: string) => {
    if (text.trim() === '') return getBreeds((breeds: Breed[]) => callback(breeds));
    getByName(text, (breed: Breed) => callback([breed]));
  }

  return <Form onSubmit={(e) => {
    e.preventDefault();
    return handleSubmit(text); 
  }}>
    Search by name: 
    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)}/>
  </Form>
}



const Input = styled.input`
  height: 50px;
  font-size: 16px;
  padding: 4px 12px;;
  margin: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  border: 1px solid #DFDFDF;
`; 

const Form = styled.form`
  width: 95%;
  max-width: 720px;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
`;

export default NameSearch;