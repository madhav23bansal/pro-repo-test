import React from 'react';
import { Button, Divider, HStack } from '../../../components';
import { EditIcon } from 'lucide-react-native';
import Wrapper from '../../Wrapper';

const DividerIconButton = () => {
  const handleEdit = () => {};
  return (
    <Wrapper>
      <HStack
        pt="$8"
        w="60%"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        overflow="hidden"
      >
        <Divider
          bg="$primary500"
          sx={{
            _dark: { bg: '$primary400' },
          }}
        />

        <Button rounded="$full" px="$4" py="$6" onPress={handleEdit}>
          <Button.Icon as={EditIcon} size="lg" strokeWidth={2} color="$white" />
        </Button>

        <Divider
          bg="$primary500"
          sx={{
            _dark: { bg: '$primary400' },
          }}
        />
      </HStack>
    </Wrapper>
  );
};

export default DividerIconButton;
