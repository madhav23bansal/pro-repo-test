import React, { useState, FC } from 'react';
import { SearchIcon } from 'lucide-react-native';
import Wrapper from '../../Wrapper';
import {
  Box,
  Divider,
  Icon,
  Input,
  Text,
  VStack,
  Heading,
} from '../../../components';

const SectionHeaderWithSearch: FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = () => {};

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
          <Input
            alignSelf="flex-start"
            width="$full"
            sx={{
              '@sm': {
                w: '$80',
              },
            }}
          >
            <Input.Icon pl="$3">
              <Icon
                as={SearchIcon}
                width={18}
                height={18}
                color="$textLight400"
                sx={{
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              />
            </Input.Icon>
            <Input.Input
              type="text"
              placeholder="Search"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleKeyPress}
              returnKeyType="done"
            />
          </Input>
        </VStack>
        <Divider mt="$5" />
      </Box>
    </Wrapper>
  );
};

export default SectionHeaderWithSearch;
