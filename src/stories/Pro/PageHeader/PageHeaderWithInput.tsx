import React from 'react';

import {
  Box,
  Heading,
  Icon,
  Input,
  SearchIcon,
  Text,
} from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithInput = () => {
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
        alignItems="center"
      >
        <PageHeaderDescription>
          <Text>Support</Text>
        </PageHeaderDescription>
        <Heading
          // TODO to fix once margin issue is resolved
          mb="$1.5"
          size="xl"
        >
          Welcome to Help Center
        </Heading>
        <PageHeaderDescription>
          <Text>How can we help you?</Text>
        </PageHeaderDescription>
        <Input mt="$3">
          <Input.Icon pl="$3">
            <Icon as={SearchIcon} />
          </Input.Icon>
          <Input.Input placeholder="Search" />
        </Input>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithInput;
