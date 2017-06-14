import styled from 'styled-components';

const Img = styled.img`
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
  };
  @media (max-width: 576px) {
    height: calc(50% - 16px);
    width: calc(50% - 16px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: calc(33% - 16px);
    width: calc(33% - 16px);
  };
  @media (min-width: 992px) {
    height: calc(25% - 16px);
    width: calc(25% - 16px);
  };
`;

Img.defaultProps = {
  active: false,
};

export default Img;
