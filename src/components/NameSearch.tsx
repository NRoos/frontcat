import React, { useState } from 'react';
import styled from 'styled-components';

type NameSearchProps = {
  callback: Function
};

const NameSearch = (props: NameSearchProps) => {
  const { callback } = props;
  const [text, setText] = useState('');

  return <Form onSubmit={(e) => {
    e.preventDefault();
    return callback(text); 
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
  border: 1px solid #DFDFDF;
`; 

const Form = styled.form`
  width: 95%;
  max-width: 720px;
  display: grid;
  grid-template-columns: 210px 1fr;
  align-items: center;
`;

export default NameSearch;