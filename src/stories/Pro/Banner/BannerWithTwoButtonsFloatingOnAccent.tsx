import React, { useState } from 'react';
import {
  Button,
  Icon,
  Text,
  Box,
  VStack,
  CloseIcon,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { HalfCutIcon } from '../../Icons';

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      bg="$primary500"
      sx={{
        ...sx,
        ':hover': { bg: '$primary600' },
        ':active': { bg: '$primary700' },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <Icon as={CloseIcon} color="$backgroundLight0" />
    </Button>
  );
};

const BannerWithTwoButtonsFloatingOnAccent = () => {
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
          bg="$primary500"
          sx={{
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
                bg="$primary600"
                color="$white"
                as={HalfCutIcon}
                p="$3"
                rounded="$lg"
                display="none"
                size="xl"
                sx={{
                  '@md': { display: 'flex', size: 'lg', mr: '$3' },
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
                <Text mr="$1" color="$textLight0">
                  We use our own and third-party cookies to personalize content.
                </Text>
                <Text color="$textLight300">
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
                  ':hover': {
                    bg: '$primary600',
                  },
                }}
                onPress={handleRejectBtnPress}
              >
                <Button.Text color="$backgroundLight0">Reject</Button.Text>
              </Button>

              <Button
                onPress={handleAllowBtnPress}
                bg="$backgroundLight0"
                sx={{
                  ':hover': {
                    bg: '$backgroundLight100',
                  },
                  ':active': {
                    bg: '$backgroundLight200',
                  },
                }}
              >
                <Button.Text color="$primary500">Allow</Button.Text>
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

export default BannerWithTwoButtonsFloatingOnAccent;
