import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { StyledComponentsObject } from '../../types';

export const S: StyledComponentsObject = {};

S.CartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

S.ShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

S.ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
