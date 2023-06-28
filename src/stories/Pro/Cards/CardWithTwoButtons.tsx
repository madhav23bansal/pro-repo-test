import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useToast,
  Toast,
} from '../../../components';

const MainCard = () => {
  const toast = useToast();

  const handleSkip = () => {};
  const handleDownload = () => {
    toast.show({
      placement: 'bottom-right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>Downloaded Successfully!</Toast.Title>
          </Toast>
        );
      },
    });
  };
  return (
    <VStack
      m="$4"
      p="$4"
      rounded="$xl"
      space="md"
      bg="$white"
      sx={{
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': { w: 700, p: '$6', mx: '$auto' },
      }}
    >
      <Box>
        <Heading m="$0" fontWeight="$normal">
          Updates Available
        </Heading>
        <Text size="sm" fontWeight="$light">
          A new version is available. Please upgrade for the best experience.
        </Text>
      </Box>

      <VStack
        space="md"
        justifyContent="flex-start"
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <Button
          variant="outline"
          action="secondary"
          sx={{ '@md': { mr: '$2' } }}
          onPress={handleSkip}
        >
          <Button.Text>Skip</Button.Text>
        </Button>
        <Button onPress={handleDownload}>
          <Button.Text>Download</Button.Text>
        </Button>
      </VStack>
    </VStack>
  );
};

const CardWithTwoButtons = () => {
  return (
    <Wrapper>
      <MainCard />
    </Wrapper>
  );
};

export default CardWithTwoButtons;
