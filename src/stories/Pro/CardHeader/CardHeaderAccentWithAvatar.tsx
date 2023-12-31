import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Button,
  HStack,
  Text,
  VStack,
  Badge,
  Avatar,
} from '../../../components';

const CardHeaderAccentWithAvatar = () => {
  const userData = [
    {
      name: 'Christoph Winston',
      email: 'chris@chakra-ui.com',
      isVerified: true,
      uri: 'https://tinyurl.com/yhkm2ek8',
      fallbackSource:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    },
  ];

  const handleContact = () => {
    // console.log('Card Header Accent Avatar Contact Button Pressed');
  };
  const handleMore = () => {
    // console.log('Card Header Accent Avatar More Button Pressed');
  };
  return (
    <Wrapper>
      <VStack>
        {userData.map((user) => {
          return (
            <VStack
              m="$4"
              justifyContent="space-between"
              alignItems="flex-start"
              bg="$backgroundLight0"
              p="$6"
              space="md"
              borderTopWidth="$4"
              borderTopColor="$primary500"
              sx={{
                '_dark': {
                  bg: '$backgroundDark950',
                },
                '@sm': {
                  m: '$8',
                  flexDirection: 'row',
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
              <HStack space="md">
                <Avatar size="lg">
                  <Avatar.Image
                    source={{
                      uri: user.uri,
                    }}
                    // @ts-ignore
                    fallbackSource={{
                      uri: user.fallbackSource,
                    }}
                  />
                </Avatar>
                <VStack space="xs" p="$1" flex={1}>
                  <HStack space="sm">
                    <Text size="xl">{user.name}</Text>
                    {user.isVerified && (
                      <Badge>
                        <Badge.Text>Verified</Badge.Text>
                      </Badge>
                    )}
                  </HStack>
                  <Text
                    color="$textLight400"
                    sx={{ _dark: { color: '$textDark400' } }}
                  >
                    {user.email}
                  </Text>
                </VStack>
              </HStack>
              <HStack space="md">
                <Button
                  variant="outline"
                  action="secondary"
                  onPress={handleContact}
                >
                  <Button.Text>Contact</Button.Text>
                </Button>
                <Button onPress={handleMore}>
                  <Button.Text>More</Button.Text>
                </Button>
              </HStack>
            </VStack>
          );
        })}
      </VStack>
    </Wrapper>
  );
};

export default CardHeaderAccentWithAvatar;
