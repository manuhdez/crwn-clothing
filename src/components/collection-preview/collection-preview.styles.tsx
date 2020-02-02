import styled from 'styled-components';
import { StyledComponentsObject } from '../../types';

export const S: StyledComponentsObject = {};

S.CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

S.Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

S.Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
