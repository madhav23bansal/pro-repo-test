import React from 'react';
import {
  Button,
  HStack,
  Text,
  VStack,
  Heading,
  useToast,
  Center,
} from '../../../components';
import Wrapper from '../../Wrapper';

const Notification = ({ handleClose }: any) => {
  return (
    <HStack
      maxWidth={450}
      w={350}
      borderRadius="$lg"
      bg="$backgroundLight0"
      m="$4"
      sx={{
        '@md': {
          m: '$8',
          w: 'auto',
        },
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$20',
        'shadowRadius': '$3',
        'elevation': '$20',
      }}
    >
      <VStack space="xs" p="$4" flex={1} justifyContent="center">
        <Heading size="xs" fontWeight="$medium">
          Updates Available
        </Heading>
        <Text
          sx={{ _dark: { color: '$textDark300' } }}
          color="$text600"
          size="sm"
          fontWeight="$light"
        >
          A new version is available. Please upgrade for the best experience.
        </Text>
      </VStack>
      <Button.Group
        borderLeftWidth="$1"
        borderLeftColor="$borderDark200"
        sx={{ _dark: { borderLeftColor: '$borderLight800' } }}
        flexDirection="column"
        size="lg"
      >
        <Button
          borderBottomWidth="$1"
          borderBottomColor="$borderDark200"
          sx={{ _dark: { borderBottomColor: '$borderLight800' } }}
          borderRadius="$none"
          size="sm"
          flex={1}
          variant="link"
        >
          <Button.Text textDecorationLine="none" fontWeight="$semibold">
            Update
          </Button.Text>
        </Button>
        <Button
          borderRadius="$none"
          flex={1}
          variant="link"
          size="sm"
          action="secondary"
          onPress={() => handleClose()}
        >
          <Button.Text textDecorationLine="none" fontWeight="$semibold">
            Close
          </Button.Text>
        </Button>
      </Button.Group>
    </HStack>
  );
};

const NotificationMain = () => {
  const toast = useToast();
  const id = 'test-toast';
  const handleClose = () => {
    toast.close(id);
  };
  const showToast = () => {
    if (!toast.isActive(id)) {
      toast.show({
        id,
        duration: null,
        placement: 'top-right',
        render: () => {
          return <Notification handleClose={handleClose} />;
        },
      });
    }
  };

  return (
    <Center flex={1}>
      <Button onPress={() => showToast()} size="lg">
        <Button.Text>Tap for Notification</Button.Text>
      </Button>
    </Center>
  );
};

export const NotificationsWithSplitButtons = () => {
  return (
    <Wrapper>
      <NotificationMain />
    </Wrapper>
  );
};
