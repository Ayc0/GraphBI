import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: 1050;
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 10px;
  transition: transform 0.3s ease-out;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  padding: 0.4em;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  opacity: 0.5;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export { Modal, ModalDialog, ModalContent, ModalBackdrop };
