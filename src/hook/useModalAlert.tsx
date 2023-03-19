import { useEffect, useRef, useState } from 'react';
import AlertContainer from '../components/AlertContainer';
type AlertContainerType = {
  body: any;
  isFirstRender?: boolean;
  button?: React.ReactElement;
  alertStyle?: React.CSSProperties;
  autoClose?: number;
  zIndex?: number;
  backGroundColor?: string;
};
type AlertType = {
  start: boolean;
  body?: React.ReactElement;
  button?: React.ReactElement;
  autoClose?: number;
};
function useModalAlert(): {
  AlertContainer: (value: AlertContainerType) => React.ReactElement;
  modalAlert: (params: AlertType) => any;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  isStart: boolean;
} {
  const [isStart, setIsStart] = useState<boolean>(false);
  const bodyRef = useRef(null);
  const buttonRef = useRef(null);
  const autoCloseRef = useRef(null);

  const modalAlert = ({ body: alertBody, button: alertButton, autoClose }: AlertType) => {
    if (alertBody) {
      bodyRef.current = alertBody;
    }
    if (alertButton) {
      buttonRef.current = alertButton;
    }
    if (autoClose) {
      autoCloseRef.current = setTimeout(() => setIsStart(false), autoClose);
    }
    return setIsStart(true);
  };

  useEffect(() => {
    if (!isStart) {
      bodyRef.current = null;
      buttonRef.current = null;
      clearTimeout(autoCloseRef.current);
    }
  }, [isStart]);

  const props = { isStart, setIsStart, bodyRef, buttonRef, autoCloseRef };
  return {
    AlertContainer: ({
      isFirstRender = false,
      body,
      button,
      alertStyle,
      autoClose,
      zIndex,
      backGroundColor = 'rgba(0, 0, 0, 0.5)',
    }: AlertContainerType) => (
      <AlertContainer
        {...props}
        isFirstRender={isFirstRender}
        body={body}
        button={button}
        alertStyle={alertStyle}
        zIndex={zIndex}
        autoClose={autoClose}
        backGroundColor={backGroundColor}
      />
    ),
    modalAlert,
    setIsStart,
    isStart,
  };
}

export { useModalAlert };
