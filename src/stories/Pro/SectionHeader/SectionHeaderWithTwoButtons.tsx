import React, { FC } from 'react';

import Wrapper from '../../Wrapper';
import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  VStack,
  HStack,
} from '../../../components';

const SectionHeaderWithTwoButtons: FC = () => {
  const handleCreate = () => {};
  const handleInvite = () => {};

  return (
    <Wrapper>
      <Box
        p="$4"
        pb="$12"
        width="$full"
        alignSelf="center"
        bg="$backgroundLight0"
        sx={{
          '@md': {
            p: '$8',
            pb: '$24',
          },
          '@xl': {
            maxWidth: 1280,
          },
          '_dark': {
            bg: '$backgroundLight950',
          },
        }}
      >
        <VStack
          space="md"
          sx={{
            '@sm': {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          }}
        >
          <VStack>
            <Heading fontWeight="$medium" fontSize="$lg">
              Member Profile
            </Heading>
            <Text fontSize="$sm">View of all logged-in users</Text>
          </VStack>
          <HStack space="md" alignSelf="flex-start">
            <Button variant="outline" onPress={handleInvite}>
              <Button.Text>Invite</Button.Text>
            </Button>
            <Button alignSelf="flex-start" onPress={handleCreate}>
              <Button.Text>Create</Button.Text>
            </Button>
          </HStack>
        </VStack>
        <Divider mt="$5" />
      </Box>
    </Wrapper>
  );
};

export default SectionHeaderWithTwoButtons;
