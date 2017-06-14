import styled from 'styled-components';

const Img = styled.img`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  margin-right: 0.3em;
  padding: 3px;
  :last-child {
    margin-right: ${({ active }) => (active ? '4px' : '5px')};
  };
  border: ${({ active }) => (active ? 'dashed 1px rgb(204, 204, 204)' : '')};
  margin: ${({ active }) => (active ? '4px' : '5px')};
  :hover {
    cursor: pointer;
    background-color: #edf0f2;
  }
`;

Img.defaultProps = {
  size: '3.6em',
};

export default Img;
