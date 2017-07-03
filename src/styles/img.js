import styled from 'styled-components';

const Img = styled.img`
  padding: 3px;
  margin: ${({ active }) => (active ? '2px' : '3px')};
  margin-top: 5px;
  margin-bottom: 5px;
  border: ${({ active }) => (active ? 'dashed 1px rgb(204, 204, 204)' : '')};
  :hover {
    cursor: pointer;
    background-color: #edf0f2;
  }

  height: calc(20% - 12px);
  width: calc(20% - 12px);

  /*@media (max-width: 576px) {
    height: calc(50% - 12px);
    width: calc(50% - 12px);
  };
  @media (min-width: 577px) and (max-width: 750px) {
    height: calc(33% - 12px);
    width: calc(33% - 12px);
  };*/
`;

Img.defaultProps = {
  active: false,
};

export default Img;
