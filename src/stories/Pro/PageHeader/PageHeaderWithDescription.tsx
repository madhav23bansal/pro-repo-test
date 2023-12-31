import React from 'react';

import { Box, Heading, Text } from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithDescription = () => {
  return (
    <Wrapper>
      <Box
        p="$4"
        bg="$white"
        py="$12"
        borderWidth="$1"
        borderColor="$blueGray200"
        borderRadius="$md"
        flex={1}
      >
        <Heading
          // TODO to fix once margin issue is resolved
          mb="$1.5"
          size="xl"
        >
          Member overview
        </Heading>
        <PageHeaderDescription>
          <Text color="$gray500">All registered users in the overview</Text>
        </PageHeaderDescription>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithDescription;
