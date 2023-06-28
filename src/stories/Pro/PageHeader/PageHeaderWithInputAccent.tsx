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

const PageHeaderWithInputAccent = () => {
  return (
    <Wrapper>
      <Box
        px="$4"
        py="$12"
        bg="$primary500"
        borderWidth="$1"
        borderColor="$blueGray200"
        borderRadius="$md"
        justifyContent="center"
        alignItems="center"
      >
        <PageHeaderDescription>
          <Text color="$white">Support</Text>
        </PageHeaderDescription>
        <Heading
          // TODO to fix once margin issue is resolved
          mb="$1.5"
          size="xl"
          color="$white"
        >
          Welcome to Help Center
        </Heading>
        <PageHeaderDescription>
          <Text color="$white">How can we help you?</Text>
        </PageHeaderDescription>
        <Input
          bg="$primary400"
          borderWidth={1}
          borderColor="$primary500"
          mt="$3"
        >
          <Input.Icon pl="$3">
            <Icon as={SearchIcon} color="$white" />
          </Input.Icon>
          <Input.Input
            placeholder="Search"
            color="$white"
            placeholderTextColor="$white"
          />
        </Input>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithInputAccent;
