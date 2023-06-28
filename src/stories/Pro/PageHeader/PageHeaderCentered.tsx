import React from 'react';

import { Box, Heading, Text } from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderCentered = () => {
  return (
    <Wrapper>
      <Box
        px="$4"
        py="$12"
        borderWidth="$1"
        borderColor="$blueGray200"
        borderRadius="$md"
        justifyContent="center"
        alignItems="center"
      >
        <PageHeaderDescription>
          <Text>Pricing</Text>
        </PageHeaderDescription>
        <Heading
          // TODO to fix once margin issue is resolved
          mb="$1.5"
          size="xl"
        >
          Get lifetime access
        </Heading>
        <PageHeaderDescription>
          <Text>Get early access to 210+ components and free updates.</Text>
        </PageHeaderDescription>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderCentered;
