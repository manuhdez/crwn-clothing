import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface WrappedComponentProps {
  isLoading: boolean;
}

const withSpinner = (WrappedComponent: React.FC) => {
  // returns a new component
  return ({ isLoading, ...otherProps }: WrappedComponentProps) => {
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
