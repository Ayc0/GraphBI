import styled from 'styled-components';

const Img = styled.img`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  margin-right: 0.6em;
  :last-child {
    margin-right: 0;
  };
`;

Img.defaultProps = {
  size: '4em',
};

export default Img;
