import styled from 'styled-components';
import { StyledComponentsObject } from '../../types';

export const S: StyledComponentsObject = {};

S.CartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

S.ItemImage = styled.img`
  src: url(${(props) => props.src});
  width: 30%;
`;

S.ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
`;

S.ItemName = styled.span`
  font-size: 16px;
`;

S.ItemPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
