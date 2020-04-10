import React from 'react';
import styled from 'styled-components';

import { option } from '../types';

type FilterSelectorProps = {
  options: option[],
  onSelect: Function,
}

const FilterSelector = (props: FilterSelectorProps) => {
  const {
    options,
    onSelect,
  } = props;

  return <Wrap>
    Filter: 
    <Select onChange={(e) => onSelect(e.currentTarget.value)}>
      {options.map(o => <option value={o.value}> {o.value} </option>)}
    </Select>
  </Wrap>
};

const Select = styled.select`
  height: 50px;
  font-size: 16px;
  padding: 4px 12px;;
  margin: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  border: 1px solid #DFDFDF;
`; 

const Wrap = styled.div`
  width: 95%;
  max-width: 720px;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
`;

export default FilterSelector;