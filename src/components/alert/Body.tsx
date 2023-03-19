import React from 'react';
import styled from 'styled-components';

type PropsType = {
  children?: React.ReactNode;
};
function Body({ children }: PropsType) {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
}

export default Body;

const Container = styled.div`
  padding: 10px;
  font-size: 1.5rem;
`;
