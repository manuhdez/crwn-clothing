import { createSelector } from 'reselect';
import { StoreState } from '../rootReducer';
import { DirectoryState } from './directory.reducer';

const selectDirectory = (state: StoreState): DirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
