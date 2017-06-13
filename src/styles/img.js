import styled from 'styled-components';

const Img = styled.img`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  padding: 0.3em;
  margin-right: 0.3em;
  :last-child {
    margin-right: 0;
  };
  :hover {
    cursor: pointer;
    background-color: #edf0f2;
  }
`;

Img.defaultProps = {
  size: '3.6em',
};

export default Img;
