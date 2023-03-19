import React from 'react';
import styled from 'styled-components';

type PropsType = {
  children?: React.ReactNode;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
};
function Button({ children, setIsStart }: PropsType) {
  return (
    <React.Fragment>
      {children ? (
        children
      ) : (
        <Container>
          <button onClick={() => setIsStart(false)}>SUCCESS</button>
        </Container>
      )}
    </React.Fragment>
  );
}

export default Button;

const Container = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eeeeee;
  > button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
