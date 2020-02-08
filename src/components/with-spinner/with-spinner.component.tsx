import React from 'react';

import Spinner from '../../components/spinner/spinner.component';

interface WrappedComponentProps {
  isLoading: boolean;
}

const withSpinner = (WrappedComponent: React.FC) => {
  // returns a new component
  return ({ isLoading, ...otherProps }: WrappedComponentProps) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
};

export default withSpinner;
