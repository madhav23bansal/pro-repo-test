import React from 'react';
import Wrapper from '../../Wrapper';
import { Text, VStack, Heading } from '../../../components';

const CardHeaderAccentWithDescription = () => {
  return (
    <Wrapper>
      <VStack
        m="$4"
        bg="$backgroundLight0"
        p="$6"
        space="xs"
        borderTopWidth="$4"
        borderTopColor="$primary500"
        sx={{
          '_dark': {
            bg: '$backgroundDark950',
          },
          '@md': {
            m: '$8',
          },
          'shadowColor': '$backgroundLight800',
          // @ts-ignore
          'shadowOffset': {
            width: 0,
            height: 1,
          },
          'shadowOpacity': 0.22,
          'shadowRadius': 2.22,
          'elevation': 3,
        }}
      >
        <Heading fontWeight="normal">Member Overview</Heading>
        <Text size="sm" color="$textLight500">
          All registered users in the overview
        </Text>
      </VStack>
    </Wrapper>
  );
};

export default CardHeaderAccentWithDescription;
