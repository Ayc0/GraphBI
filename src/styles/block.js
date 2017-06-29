import styled from 'styled-components';

const Block = styled.div`
  background-color: white;
  margin-bottom: 1em;
  padding: 0.7em;
  padding-top: 0.58em;
  box-shadow: 0px 0px 0px 0.5px rgba(47, 47, 47, 0.16);
  align-self: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'auto')}
`;
const BlockTitle = styled.h2`
  color: #00a0ee;
  margin: 0;
  margin-bottom: 0.6em;
  font-size: 16px;
`;

export { Block, BlockTitle };
