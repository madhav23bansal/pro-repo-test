import React from 'react';
import { ChevronDownIcon, Button, Divider, HStack } from '../../../components';
import Wrapper from '../../Wrapper';

const DividerWithButton = () => {
  const handleCreate = () => {};
  return (
    <Wrapper>
      <HStack
        pt="$8"
        w="$full"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Divider />
        <Button
          variant="outline"
          action="secondary"
          onPress={handleCreate}
          borderRadius="$full"
        >
          <Button.Text
            fontWeight="$semibold"
            fontSize="$sm"
            lineHeight="$sm"
            fontStyle="normal"
          >
            Friday, 30 August
          </Button.Text>
          <Button.Icon
            as={ChevronDownIcon}
            ml="$2"
            w="$3"
            h="$3"
            color="$secondary700"
            sx={{
              _dark: { color: '$secondary300' },
            }}
          />
        </Button>
        <Divider />
      </HStack>
    </Wrapper>
  );
};

export default DividerWithButton;
