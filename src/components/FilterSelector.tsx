import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { IoIosArrowDown } from "react-icons/io";

type FilterSelectorProps = {
  options: string[],
  onSelect: Function,
  value: string,
}

const FilterSelector = (props: FilterSelectorProps) => {
  const {
    options,
    onSelect,
    value, 
  } = props;

  return <Selector>
    Filter by origin: 
    <SelectWrap>
      <Select value={value} onChange={(e) => onSelect(e.currentTarget.value)}>
        {options.map(o => <option key={v4()} value={o}> {o} </option>)}
      </Select>
      <IconWrap>
        <IoIosArrowDown />
      </IconWrap>
    </SelectWrap>
  </Selector>
};

const Select = styled.select`
  appearance: none;
  border: 0;
  padding: 4px 12px;;
  font-size: 20px;
  height: 100%;
`; 

const IconWrap = styled.div`
  position: relative;
  right: 40px;
`;

const SelectWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 0px;
  align-items: center;
  border: 1px solid #DFDFDF;
  height: 50px;
  font-size: 20px;
  margin: 4px;
`;

const Selector = styled.div`
  width: 95%;
  max-width: 720px;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
`;

export default FilterSelector;