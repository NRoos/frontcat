import React from 'react';
import styled from 'styled-components';
import CardContainer from './containers/CardContainer';
import SidebarContainer from './containers/SidebarContainer';

function App() {
  return (
    <AppWrap>
      <SidebarContainer />
      <CardContainer />
    </AppWrap>
  );

}

const AppWrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

export default App;
