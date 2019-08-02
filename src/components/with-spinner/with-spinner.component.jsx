import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner = (WrappedComponent) => {
  // returns a new component
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default withSpinner;
