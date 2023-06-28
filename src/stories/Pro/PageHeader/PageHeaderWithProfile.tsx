import React from 'react';

import { Box, Badge, Button, HStack, Text } from '../../../components';
import Wrapper from '../../Wrapper';

import PageHeaderDescription from './PageHeaderDescription';
import { Briefcase, DollarSign, MapPin } from 'lucide-react-native';

const PageHeaderWithProfile = () => {
  return (
    <Wrapper>
      <Box
        bg="$backgroundLight0"
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <Box
          mx="auto"
          maxWidth={1280}
          flexDirection="column"
          pt="$8"
          pb="$24"
          px="$4"
          w="$full"
          sx={{
            '@md': {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: '$8',
            },
          }}
        >
          <Box>
            <Text
              color="$textDark900"
              size="3xl"
              fontWeight="$medium"
              sx={{
                _dark: {
                  color: '$textDark100',
                },
              }}
            >
              Christoph Winstons
            </Text>
            <PageHeaderDescription>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                mt="$1"
                flexWrap="wrap"
                sx={{
                  '@md': {
                    flexDirection: 'row',
                  },
                }}
              >
                <Badge
                  bg="$transparent"
                  sx={{
                    _dark: {
                      bg: '$transparent',
                    },
                  }}
                  justifyContent="flex-start"
                  alignSelf="flex-start"
                  mr="$6"
                >
                  <Badge.Icon
                    mr="$2"
                    as={Briefcase}
                    color="$muted700"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                  />
                  <Badge.Text
                    textTransform="none"
                    fontSize="$md"
                    color="$muted700"
                    fontWeight="$light"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                  >
                    Software Engineer
                  </Badge.Text>
                </Badge>
                <Badge
                  bg="$transparent"
                  justifyContent="flex-start"
                  alignSelf="flex-start"
                  sx={{
                    _dark: {
                      bg: '$transparent',
                    },
                  }}
                  mr="$6"
                >
                  <Badge.Icon
                    mr="$2"
                    as={MapPin}
                    color="$muted700"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                  />
                  <Badge.Text
                    textTransform="none"
                    fontSize="$md"
                    color="$muted700"
                    fontWeight="$light"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                  >
                    Berlin, Germany
                  </Badge.Text>
                </Badge>
                <Badge
                  bg="$transparent"
                  justifyContent="flex-start"
                  alignSelf="flex-start"
                  sx={{
                    _dark: {
                      bg: '$transparent',
                    },
                  }}
                >
                  <Badge.Icon
                    mr="$2"
                    as={DollarSign}
                    color="$muted700"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                  />
                  <Badge.Text
                    textTransform="none"
                    fontSize="$md"
                    color="$muted700"
                    sx={{
                      _dark: {
                        color: '$textDark100',
                      },
                    }}
                    fontWeight="$light"
                  >
                    80.000 - 90.000
                  </Badge.Text>
                </Badge>
              </HStack>
            </PageHeaderDescription>
          </Box>
          <HStack
            alignItems="center"
            justifyContent="flex-start"
            flexWrap="wrap"
            space="sm"
            mt="$1"
            sx={{
              '@md': {
                mt: '$0',
                justifyContent: 'flex-end',
                flex: 1,
              },
            }}
          >
            <Button variant="outline" action="secondary">
              <Button.Text>Share</Button.Text>
            </Button>
            <Button>
              <Button.Text>Contact</Button.Text>
            </Button>
          </HStack>
          <Box />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default PageHeaderWithProfile;
