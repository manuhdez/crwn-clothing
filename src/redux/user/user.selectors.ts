import { createSelector } from 'reselect';
import { StoreState } from '../rootReducer';

const selectUser = (state: StoreState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
