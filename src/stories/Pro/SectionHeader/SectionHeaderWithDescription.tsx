import React, { FC } from 'react';

import Wrapper from '../../Wrapper';
import { Box, Divider, Heading, Text } from '../../../components';

const SectionHeaderWithDescription: FC = () => {
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
        <Heading fontWeight="$medium" fontSize="$lg">
          Member Profile
        </Heading>
        <Text fontSize="$sm">View of all logged-in users</Text>
        <Divider mt="$5" />
      </Box>
    </Wrapper>
  );
};

export default SectionHeaderWithDescription;
