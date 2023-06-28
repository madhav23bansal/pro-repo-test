import React, { useState } from 'react';
import {
  Button,
  Icon,
  Text,
  Box,
  CloseIcon,
  VStack,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { HalfCutIcon } from '../../Icons';

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      bg="$backgroundLight0"
      sx={{
        ...sx,
        ':hover': { bg: '$backgroundLight100' },
        ':active': { bg: '$backgroundLight200' },
        '_dark': {
          'bg': '$backgroundLight950',
          ':hover': { bg: '$backgroundDark900' },
          ':active': { bg: '$backgroundDark800' },
        },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <Icon
        as={CloseIcon}
        color="$textLight700"
        sx={{ _dark: { color: '$textDark300' } }}
      />
    </Button>
  );
};

const BannerWithTwoButtonsFloating = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRejectBtnPress = () => {};

  const handleAllowBtnPress = () => {};

  return (
    <Wrapper>
      <Box
        maxWidth={1280}
        width="$full"
        mx="auto"
        p="$4"
        sx={{
          '@md': {
            p: '$8',
          },
        }}
        display={isVisible ? 'flex' : 'none'}
      >
        <Box
          p="$4"
          rounded="$xl"
          bg="$backgroundLight0"
          sx={{
            _dark: {
              bg: '$backgroundDark950',
            },
            shadowColor: '$backgroundLight800',
            //@ts-ignore
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
        >
          <CloseButton
            setIsVisible={setIsVisible}
            position="absolute"
            ml="$2"
            mb="$4"
            top={10}
            right={10}
            zIndex={999}
            sx={{
              '@md': { display: 'none' },
            }}
          />

          <VStack
            justifyContent="space-between"
            sx={{
              '@md': {
                flexDirection: 'row',
              },
            }}
          >
            <VStack
              mb="$2"
              sx={{
                '@md': {
                  flexDirection: 'row',
                  alignItems: 'center',
                  mb: '$0',
                },
              }}
            >
              <Icon
                bg="$backgroundLight100"
                color="$backgroundDark950"
                as={HalfCutIcon}
                p="$3"
                rounded="$lg"
                display="none"
                size="xl"
                sx={{
                  '@md': { display: 'flex', size: 'lg', mr: '$3' },
                  '_dark': {
                    color: '$backgroundLight50',
                    bg: '$backgroundDark900',
                  },
                }}
              />

              <VStack
                mr="$10"
                space="xs"
                sx={{
                  '@lg': {
                    flexDirection: 'row',
                    flex: 1,
                  },
                }}
              >
                <Text mr="$1">
                  We use our own and third-party cookies to personalize content.
                </Text>
                <Text color="$textLight500">
                  Learn more about our use of cookies.
                </Text>
              </VStack>
            </VStack>

            <VStack space="sm" sx={{ '@md': { flexDirection: 'row' } }}>
              <Button
                variant="outline"
                action="secondary"
                mr="$0"
                sx={{
                  '@md': {
                    mr: '$4',
                  },
                }}
                onPress={handleRejectBtnPress}
              >
                <Button.Text>Reject</Button.Text>
              </Button>

              <Button onPress={handleAllowBtnPress}>
                <Button.Text>Allow</Button.Text>
              </Button>
              <CloseButton
                sx={{
                  '@md': { display: 'flex' },
                }}
                setIsVisible={setIsVisible}
                display="none"
              />
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default BannerWithTwoButtonsFloating;
