import React from 'react';
import { Box, Button, Divider } from '../../../components';
import Wrapper from '../../Wrapper';
import { BoldIcon, ItalicIcon, StrikethroughIcon } from 'lucide-react-native';

const DividerWithIconGroup = () => {
  const handleBold = () => {};
  const handleItalic = () => {};
  const handleStrikethrough = () => {};

  return (
    <Wrapper>
      <Box alignItems="center" justifyContent="center" pt="$8">
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="$secondary200"
          borderRadius="$md"
          alignItems="center"
          sx={{
            _dark: { borderColor: '$trueGray600' },
          }}
        >
          <Button
            onPress={handleBold}
            action="secondary"
            variant="outline"
            borderWidth="$0"
            borderTopRightRadius="$none"
            borderBottomRightRadius="$none"
            borderTopLeftRadius="$md"
            borderBottomLeftRadius="$md"
            px="$4"
          >
            <Button.Icon as={BoldIcon} h="$4" w="$4" />
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleItalic}
            borderWidth="$0"
            borderRadius="$none"
            px="$4"
          >
            <Button.Icon as={ItalicIcon} w="$4" />
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleStrikethrough}
            borderWidth="$0"
            borderTopRightRadius="$md"
            borderBottomRightRadius="$md"
            borderTopLeftRadius="$none"
            borderBottomLeftRadius="$none"
            px="$4"
          >
            <Button.Icon as={StrikethroughIcon} h="$4" w="$4" />
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default DividerWithIconGroup;
