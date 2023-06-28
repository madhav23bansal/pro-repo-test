import React from 'react';

import { Box, Button, HStack, Heading, Text } from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithCTA = () => {
  return (
    <Wrapper>
      <Box
        px="$4"
        py="$12"
        bg="$white"
        borderWidth="$1"
        borderColor="$blueGray200"
        borderRadius="$md"
        justifyContent="center"
      >
        <PageHeaderDescription>
          <Text color="$primary500">Pricing</Text>
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
        <HStack mt="$10" h="$10" space="sm">
          {/* TODO - remove mr once space issue is resolved */}
          <Button variant="outline" action="secondary">
            <Button.Text>Learn More</Button.Text>
          </Button>
          <Button>
            <Button.Text>Start Free Trial</Button.Text>
          </Button>
        </HStack>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithCTA;
