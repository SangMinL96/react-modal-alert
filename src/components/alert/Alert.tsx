import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Button from './Button';

type PropsType = {
  children: React.ReactNode;
  alertStyle: React.CSSProperties;
};
function Alert({ children, alertStyle }: PropsType) {
  return <Container style={{ ...alertStyle }}>{children}</Container>;
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @keyframes open {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  animation: open 0.1s linear;
`;

Alert.Body = Body;
Alert.Button = Button;
export default Alert;
