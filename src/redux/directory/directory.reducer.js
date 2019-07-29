import { sectionsData } from '../../components/directory/directory.data';

const initialState = {
  sections: sectionsData
};

const directoryReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
