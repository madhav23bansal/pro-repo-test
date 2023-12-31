import React, { useState } from 'react';
import Wrapper from '../../Wrapper';
import { HStack, Icon, Pressable, VStack } from '../../../components';
import { Star } from 'lucide-react-native';

const RatingIcon = ({ iconSize, isFilled }: any) => {
  return (
    <Icon
      fill="currentColor"
      as={Star}
      color={isFilled ? '$primary500' : '$gray400'}
      size={iconSize}
    />
  );
};

const RatingComponent = ({
  iconSize,
  totalRating = 5,
  ratingValue,
  setRatingValue,
}: {
  iconSize: any;
  totalRating?: number;
  ratingValue: number;
  setRatingValue: (value: number) => void;
}) => {
  const renderRating = Array.from({ length: totalRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= ratingValue;
    return (
      <Pressable onPress={() => setRatingValue(starNumber)}>
        <RatingIcon iconSize={iconSize} isFilled={isFilled} />
      </Pressable>
    );
  });
  return <HStack>{renderRating}</HStack>;
};

const Rating = ({ value = 3 }: { value: number }) => {
  const [ratingValue, setRatingValue] = useState(value);
  return (
    <Wrapper>
      <VStack
        px="$4"
        py="$6"
        space="md"
        sx={{
          '@lg': {
            p: '$12',
          },
        }}
      >
        <RatingComponent
          iconSize="sm"
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
        <RatingComponent
          iconSize="md"
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
        <RatingComponent
          iconSize="lg"
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </VStack>
    </Wrapper>
  );
};

export default Rating;
