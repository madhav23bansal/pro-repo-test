import React, { FC } from 'react';
import { Button, Text, Heading, VStack } from '../../../components';
import Wrapper from '../../Wrapper';

const CtaCentredOnAccent: FC = () => {
  const handleLearnMore = () => {};
  const handleTrial = () => {};

  return (
    <Wrapper>
      <VStack
        bg="$primary600"
        p="$8"
        justifyContent="center"
        alignItems="center"
        space="4xl"
        sx={{
          '@md': {
            p: '$12',
          },
        }}
      >
        <VStack maxWidth={620} sx={{ '@lg': { flex: 1 } }}>
          <Heading
            textAlign="center"
            fontSize="$3xl"
            lineHeight="$3xl"
            color="$textLight50"
            sx={{
              '@md': {
                fontSize: '$4xl',
                lineHeight: '$5xl',
              },
              '_dark': {
                color: '$textDark50',
              },
            }}
          >
            Discover New Horizons
          </Heading>
          <Text
            mt="$2"
            color="$textLight100"
            size="lg"
            textAlign="center"
            sx={{
              '@lg': { lineHeight: '$xl', mt: '$3' },
              '_dark': {
                color: '$textDark100',
              },
            }}
          >
            Unleash your creativity with our responsive and versatile design
            components. Whether you're building a website or a mobile app, we
            have you covered.
          </Text>
        </VStack>

        <VStack
          w="$full"
          flexDirection="column-reverse"
          sx={{
            '@sm': {
              flexDirection: 'row',
              w: 'auto',
            },
          }}
        >
          <Button
            onPress={handleLearnMore}
            variant="outline"
            action="primary"
            borderColor="$borderLight100"
            mr="$0"
            sx={{
              ':hover': {
                bg: '$primary600',
              },
              ':active': {
                bg: '$primary700',
              },
              '@sm': { mr: '$3' },
            }}
            size="lg"
          >
            <Button.Text color="$white">Request Demo</Button.Text>
          </Button>
          <Button
            onPress={handleTrial}
            size="lg"
            bgColor="$white"
            sx={{
              'mb': '$3',
              '@sm': { mb: '$0' },
              ':hover': {
                bg: '$gray100',
              },
              ':active': {
                bg: '$gray200',
              },
            }}
          >
            <Button.Text color="$primary600">Get Started</Button.Text>
          </Button>
        </VStack>
      </VStack>
    </Wrapper>
  );
};

export default CtaCentredOnAccent;
