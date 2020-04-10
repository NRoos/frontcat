import React from 'react';
import styled from 'styled-components';

const SidebarContainer = (): JSX.Element => {
  return <Sidebar>
    <Title> Frontcat </Title>
  </Sidebar>
}

const Sidebar = styled.div`
  display: grid;
  height: 150px;
  background-color: purple;
`;

const Title = styled.h1`
  color: white;
  padding: 0;
  margin: 0;
  justify-self: center;
  align-self: center;
`;

export default SidebarContainer;