import styled, { css } from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const S = {};

const CollectionItemTransition = css`
  transition: all ease-out 200ms;
`;

S.CollectionItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  max-width: 250px;
  margin-bottom: 30px;
`;

S.AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;
  border: none;
  ${CollectionItemTransition}

  ${S.CollectionItem}:hover & {
    opacity: 0.9;
    border: none;
  }
`;

S.CollectionImage = styled.img`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
  ${CollectionItemTransition}

  ${S.CollectionItem}:hover & {
    opacity: 0.8;
  }
`;

S.FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

S.FooterPrice = styled.span`
  width: 10%;
`;

S.FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
