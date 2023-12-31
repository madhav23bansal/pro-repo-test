import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Box,
  Heading,
  Text,
  Button,
  useToast,
  Toast,
} from '../../../components';

const MainCard = () => {
  const toast = useToast();

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
    <Box
      flexDirection="column"
      bg="$backgroundLight0"
      justifyContent="space-between"
      alignItems="flex-start"
      p="$4"
      m="$4"
      rounded="$lg"
      sx={{
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': {
          flexDirection: 'row',
          mx: '$auto',
          p: '$6',
          width: 680,
        },
      }}
    >
      <Box>
        <Heading m="$0" fontWeight="$normal">
          Updates Available
        </Heading>
        <Text size="sm" fontWeight="$light" mt="$1">
          A new version is available. Please upgrade for the best experience.
        </Text>
      </Box>

      <Button mt="$5" sx={{ '@md': { mt: '$0' } }} onPress={handleDownload}>
        <Button.Text fontWeight="$semibold">Download</Button.Text>
      </Button>
    </Box>
  );
};
const CardWithRightButton = () => {
  return (
    <Wrapper>
      <MainCard />
    </Wrapper>
  );
};

export default CardWithRightButton;
