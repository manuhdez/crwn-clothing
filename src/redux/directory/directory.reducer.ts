import { sectionsData } from '../../components/directory/directory.data';
import { Section } from '../../types';

export interface DirectoryState {
  sections: Section[];
}

export interface DirectoryAction {
  type: string;
}

const initialState: DirectoryState = {
  sections: sectionsData
};

const directoryReducer = (state = initialState, action: DirectoryAction) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
