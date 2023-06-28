import React, { useState } from 'react';
import Wrapper from '../../Wrapper';
import { Button, HStack, Text, VStack } from '../../../components';

const SIZES: number[] = [32, 34, 36, 40];

const SizePicker: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number>(32);

  const handleSizeSelection = (size: number) => {
    setSelectedSize(size);
  };

  return (
    <Wrapper>
      <VStack
        space="sm"
        bg="$backgroundLight0"
        p="$8"
        sx={{
          '_dark': { bg: '$backgroundDark950' },
          '@md': { p: '$16' },
        }}
      >
        <Text fontWeight="$semibold" fontSize="$sm">
          Size: {selectedSize}mm
        </Text>
        <HStack space="sm">
          {SIZES.map((size) => (
            <Button
              key={size.toString()}
              p="$3"
              variant="outline"
              bgColor={
                size === selectedSize ? '$primary0' : '$backgroundLight0'
              }
              borderColor={
                size === selectedSize ? '$primary500' : '$borderLight100'
              }
              sx={{
                _web: {
                  outlineWidth: size === selectedSize ? '$0.5' : '$0',
                  outlineStyle: 'solid',
                  outlineColor:
                    size === selectedSize ? '$primary500' : '$borderLight100',
                },
                _dark: {
                  bg:
                    size === selectedSize
                      ? '$primary900'
                      : '$backgroundDark950',
                  borderColor:
                    size === selectedSize ? '$primary500' : '$borderLight100',
                },
              }}
              onPress={() => handleSizeSelection(size)}
            >
              <Button.Text
                color={
                  size === selectedSize ? '$primary500' : '$borderLight700'
                }
                sx={{
                  _dark: {
                    color:
                      size === selectedSize ? '$primary500' : '$borderDark300',
                  },
                }}
              >
                {size}
              </Button.Text>
            </Button>
          ))}
        </HStack>
      </VStack>
    </Wrapper>
  );
};

export default SizePicker;
