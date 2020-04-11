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
    <Input placeholder='tabby' onChange={(e: React.FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)} />
  </Form>
}

const Input = styled.input`
  height: 50px;
  font-size: 20px;
  margin: 4px;
  border: 1px solid #DFDFDF;
  padding: 0;
  width: 100%;
  justify-self: center;
  padding: 8px;
  box-sizing: border-box;
`; 

const Form = styled.form`
  display: grid;
  width: 95%;
  max-width: 420px;
  grid-template-columns: 120px 1fr;
  align-items: center;
  padding: 4px;
`;

export default NameSearch;