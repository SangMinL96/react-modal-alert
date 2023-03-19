import React, { useEffect } from 'react';
import styled from 'styled-components';
import Alert from './alert/Alert';

export type PropsContainerType = {
  isStart: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex?: number;
  bodyRef?: any;
  buttonRef?: any;
  autoCloseRef?: any;
  isFirstRender?: boolean;
  body?: React.ReactElement;
  button?: React.ReactElement;
  alertStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  autoClose?: number;
  backGroundColor?: string;
};

function AlertContainer({
  isStart,
  setIsStart,
  zIndex = 999,
  bodyRef,
  buttonRef,
  autoCloseRef,
  isFirstRender,
  body,
  button,
  alertStyle,
  containerStyle,
  autoClose,
  backGroundColor,
}: PropsContainerType) {
  useEffect(() => {
    if (isFirstRender) {
      setIsStart(true);
      bodyRef.current = body;
      buttonRef.current = button;
    }
    return () => {
      setIsStart(false);
      bodyRef.current = null;
      buttonRef.current = null;
    };
  }, []);

  if (autoClose) {
    clearTimeout(autoCloseRef.current);
    autoCloseRef.current = setTimeout(() => setIsStart(false), autoClose);
  }
  if (!bodyRef.current) {
    bodyRef.current = body;
  }
  if (!buttonRef.current) {
    buttonRef.current = button;
  }
  if (!isStart) return null;
  return (
    <Container style={{ ...containerStyle }} zIndex={zIndex}>
      <Alert alertStyle={alertStyle}>
        <Alert.Body>{bodyRef.current ? bodyRef.current : null}</Alert.Body>
        <Alert.Button setIsStart={setIsStart}>{buttonRef.current ? buttonRef.current : null}</Alert.Button>
      </Alert>
      <BackGround backGroundColor={backGroundColor} onClick={() => setIsStart(false)} />
    </Container>
  );
}

export default React.memo(AlertContainer);

type StyledType = {
  zIndex?: number;
  backGroundColor?: string;
};
const Container = styled.div<StyledType>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${props => props.zIndex};
`;

const BackGround = styled.div<StyledType>`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  z-index: -1;
  background-color: ${props => props.backGroundColor};
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
