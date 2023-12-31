import React, { FC } from 'react';
import Wrapper from '../../Wrapper';
import { Box, VStack, Text } from '../../../components';
import { ScrollView } from 'react-native';

const LayoutWithStickyNavbar: FC = () => {
  return (
    <Wrapper>
      <ScrollView stickyHeaderIndices={[0]}>
        <Box bg="$primary500" py="$4" px="$8">
          <Text
            px="$4"
            py="$3"
            color="$textLight0"
            sx={{
              '@lg': {
                mx: '$16',
              },
            }}
          >
            Navigation
          </Text>
        </Box>
        <VStack
          py="$16"
          px="$8"
          sx={{
            '@xs': {
              px: '$4',
            },
            '@lg': {
              flexDirection: 'row',
              mx: '$16',
            },
          }}
        >
          <Box bg="$primary500" minHeight={512} px="$4" py="$3" flex={1}>
            <Text px="$4" py="$3" color="$textLight0">
              Main
            </Text>
          </Box>
        </VStack>

        <Box bg="$primary500" px="$8" py="$4">
          <Text
            px="$4"
            py="$3"
            color="$textLight0"
            sx={{
              '@lg': {
                mx: '$16',
              },
            }}
          >
            Footer
          </Text>
        </Box>
      </ScrollView>
    </Wrapper>
  );
};

export default LayoutWithStickyNavbar;
