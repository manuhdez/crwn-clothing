import styled, { StyledComponent } from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const S: { [name: string]: StyledComponent<any, any> } = {};

S.CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 0;
  z-index: 5;
`;

S.CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

S.EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

S.CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
