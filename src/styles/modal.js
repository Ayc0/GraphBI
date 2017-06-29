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
  margin: 10px;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  outline: 0;
  bow-shadow: 20px 0 15px rgba(0, 0, 0, 0.15);
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

const ModalTitle = styled.h2`
  background-color: #dddddd;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  margin: 0;
  font-weight: bold;
`;

const ModalBody = styled.div`
  padding: 0.6em;
`;

export {
  Modal,
  ModalDialog,
  ModalContent,
  ModalBackdrop,
  ModalTitle,
  ModalBody,
};
