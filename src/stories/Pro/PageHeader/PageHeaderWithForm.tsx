import React from 'react';

import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  SearchIcon,
  Text,
} from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';

const PageHeaderWithForm = () => {
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
          <Text color="$primary500">Blog</Text>
        </PageHeaderDescription>
        <Heading
          // TODO to fix once margin issue is resolved
          mb="$1.5"
          size="xl"
        >
          Latest Updates
        </Heading>
        <PageHeaderDescription>
          <Text>
            Stay up-to-date with our newsletter. and never miss any news.
          </Text>
        </PageHeaderDescription>
        <HStack mt="$10" space="$4" alignItems="center" justifyContent="center">
          {/* TODO - remove mr once space issue is resolved */}
          <Input>
            <Input.Icon pl="$3">
              <Icon as={SearchIcon} />
            </Input.Icon>
            <Input.Input placeholder="Search" />
          </Input>
          <Button ml="$2">
            <Button.Text>Subscribe</Button.Text>
          </Button>
        </HStack>
        <Text color="$gray400" size="xs" mt="$1.5">
          For more information, please read our Privacy Policy.
        </Text>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithForm;
