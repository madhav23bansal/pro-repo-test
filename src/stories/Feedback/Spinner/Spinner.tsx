import React from 'react';
import Wrapper from '../../Wrapper';
import { Spinner } from '../../../components';

export const SpinnerStory = ({ ...props }) => {
  return (
    <Wrapper>
      <Spinner color="$primary500" {...props} />
    </Wrapper>
  );
};

export { Spinner };
