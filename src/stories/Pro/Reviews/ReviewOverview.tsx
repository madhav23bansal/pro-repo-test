import React, { useRef, useState } from 'react';
import Wrapper from '../../Wrapper';
import {
  HStack,
  Heading,
  VStack,
  Icon,
  Text,
  Button,
  Divider,
  Box,
  Modal,
  FormControl,
  Input,
  TextArea,
  useToast,
  Toast,
  WarningIcon,
  CloseIcon,
  Pressable,
} from '../../../components';
import { Star } from 'lucide-react-native';
import { Keyboard, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

type Review = {
  id: string;
  rating: number;
  username: string;
  date: string;
  title: string;
  comment: string;
};

type AddReviewDailogProps = {
  showModal: boolean;
  setShowModal: Function;
  setReviews: Function;
};

const reviewsData: Review[] = [
  {
    id: uuidv4(),
    rating: 4,
    username: 'Christopher',
    date: 'July 15th 2020',
    title: 'Love this product!',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 4,
    username: 'Toby',
    date: 'July 13th 2020',
    title: 'Highly recommended',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 5,
    username: 'Pheobe',
    date: 'July 11th 2020',
    title: 'First class customer service',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 3,
    username: 'Sarah',
    date: 'July 15th 2020',
    title: 'Love my new watch',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 5,
    username: 'Dakota',
    date: 'July 13th 2020',
    title: 'Great price & quality',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 4,
    username: 'George',
    date: 'July 11th 2020',
    title: 'Best watch I have ever bought',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const RatingIcon = ({
  iconSize,
  isFilled,
}: {
  iconSize: any;
  isFilled: boolean;
}) => {
  return (
    <Icon
      fill="currentColor"
      as={Star}
      color={isFilled ? '$primary500' : '$gray400'}
      size={iconSize}
    />
  );
};

const Rating = ({
  iconSize = 'sm',
  totalRating = 5,
  ratingValue,
  isInteractive = false,
  onChangeRating,
}: {
  iconSize?: any;
  totalRating?: number;
  ratingValue: number;
  isInteractive?: boolean;
  onChangeRating?: (value: any) => void;
}) => {
  const renderRating = Array.from({ length: totalRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= ratingValue;
    const handleRatingChange = () => {
      if (isInteractive && onChangeRating) onChangeRating(starNumber);
    };
    return (
      <Pressable disabled={!isInteractive} onPress={handleRatingChange}>
        <RatingIcon iconSize={iconSize} isFilled={isFilled} />
      </Pressable>
    );
  });

  return <HStack>{renderRating}</HStack>;
};

const SingleReview = ({ rating, username, date, title, comment }: Review) => {
  return (
    <VStack
      space="sm"
      mt="$12"
      sx={{
        '@md': {
          flexBasis: '$1/2',
          maxWidth: 360,
        },
        '@lg': {
          maxWidth: 520,
        },
      }}
      flex={1}
    >
      <VStack space="sm">
        <Rating ratingValue={rating} />
        <Text size="sm" color="$gray600">{`by ${username}, ${date}`}</Text>
      </VStack>
      <Text fontWeight="$semibold">{title}</Text>
      <Text flex={1}>{comment}</Text>
    </VStack>
  );
};

const AddReviewDailog = ({
  showModal,
  setShowModal,
  setReviews,
}: AddReviewDailogProps) => {
  const ref = useRef(null);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const toast = useToast();

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: any) => {
    setShowModal(false);

    setReviews((prev: any) => {
      return [{ ...data, date: 'Aug 12th 2020', id: uuidv4() }, ...prev];
    });
    toast.show({
      placement: 'bottom-right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>Added Successfully!</Toast.Title>
          </Toast>
        );
      },
    });
    reset();
  };

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
        reset();
      }}
      initialFocusRef={ref}
    >
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <Heading size="xl" fontWeight="$semibold">
            Write a review
          </Heading>
          <Modal.CloseButton>
            <Icon as={CloseIcon} />
          </Modal.CloseButton>
        </Modal.Header>
        <Modal.Body>
          <VStack space="md">
            <FormControl isInvalid={errors.username}>
              <VStack space="xs">
                <FormControl.Label>
                  <FormControl.Label.Text>Name</FormControl.Label.Text>
                </FormControl.Label>
                <Controller
                  control={control}
                  rules={{
                    required: 'Name is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input ref={ref}>
                      <Input.Input
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your name"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="username"
                />
                <FormControl.Error>
                  <FormControl.Error.Icon as={WarningIcon} />
                  <FormControl.Error.Text>
                    {errors?.username?.message}
                  </FormControl.Error.Text>
                </FormControl.Error>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.rating}>
              <VStack space="xs">
                <FormControl.Label>
                  <FormControl.Label.Text>Rating</FormControl.Label.Text>
                </FormControl.Label>
                <Controller
                  control={control}
                  rules={{
                    required: 'Rating is required!',
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Rating
                      iconSize="md"
                      ratingValue={value}
                      isInteractive={true}
                      onChangeRating={onChange}
                    />
                  )}
                  name="rating"
                />
                <FormControl.Error>
                  <FormControl.Error.Icon as={WarningIcon} />
                  <FormControl.Error.Text>
                    {errors?.rating?.message}
                  </FormControl.Error.Text>
                </FormControl.Error>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.title}>
              <VStack space="xs">
                <FormControl.Label>
                  <FormControl.Label.Text>Title</FormControl.Label.Text>
                </FormControl.Label>
                <Controller
                  control={control}
                  rules={{
                    required: 'Title is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <Input.Input
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your title"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="title"
                />
                <FormControl.Error>
                  <FormControl.Error.Icon as={WarningIcon} />
                  <FormControl.Error.Text>
                    {errors?.title?.message}
                  </FormControl.Error.Text>
                </FormControl.Error>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.comment}>
              <VStack space="xs">
                <FormControl.Label>
                  <FormControl.Label.Text>Comment</FormControl.Label.Text>
                </FormControl.Label>
                <Controller
                  name="comment"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 100,
                      message: 'Maximum length is 100 characters',
                    },
                    required: 'Comment is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    // @ts-ignore
                    <TextArea>
                      <TextArea.Input
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your comment"
                      />
                    </TextArea>
                  )}
                />
                <FormControl.Error>
                  <FormControl.Error.Icon as={WarningIcon} />
                  <FormControl.Error.Text>
                    {errors?.comment?.message}
                  </FormControl.Error.Text>
                </FormControl.Error>
              </VStack>
            </FormControl>
          </VStack>
          <Button
            mt="$4"
            sx={{
              h: 50,
              alignSelf: 'flex-start',
            }}
            size="sm"
            onPress={handleSubmit(onSubmit)}
          >
            <Button.Text fontSize="$lg">Submit review</Button.Text>
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

const ReviewOverview = () => {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [maxLimit, setMaxLimit] = useState<number>(6);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const averageRating = Math.floor(
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  );

  const handleLoadMore = () => {
    setMaxLimit(reviews.length);
    setLoadMoreVisible(false);
  };

  return (
    <Wrapper>
      <ScrollView>
        {showModal && (
          <AddReviewDailog
            showModal={showModal}
            setShowModal={setShowModal}
            setReviews={setReviews}
          />
        )}
        <VStack
          width="$full"
          mx="auto"
          maxWidth={1280}
          p="$4"
          sx={{
            '@md': {
              px: '$8',
            },
          }}
        >
          <VStack
            space="md"
            justifyContent="space-between"
            sx={{
              '@sm': { flexDirection: 'row', alignItems: 'center' },
            }}
          >
            <VStack space="sm">
              <Heading size="xl">Customer Reviews</Heading>
              <HStack alignItems="center" space="sm">
                <Rating iconSize="sm" ratingValue={averageRating} />
                <Text color="$gray600">{`Based on ${reviews.length} reviews`}</Text>
              </HStack>
            </VStack>
            <Button size="lg" onPress={() => setShowModal(true)}>
              <Button.Text>Write A Review</Button.Text>
            </Button>
          </VStack>

          <Divider
            mt="$12"
            display="none"
            sx={{
              '@md': {
                display: 'flex',
              },
            }}
          />
          <Box
            sx={{
              '@md': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              },
            }}
          >
            {reviews.slice(0, maxLimit).map((review) => (
              <SingleReview {...review} />
            ))}
          </Box>
          <Button
            size="lg"
            variant="outline"
            borderColor="$borderLight100"
            alignSelf="center"
            mt="$8"
            onPress={handleLoadMore}
            display={loadMoreVisible ? 'flex' : 'none'}
          >
            <Button.Text>Load More</Button.Text>
          </Button>
        </VStack>
      </ScrollView>
    </Wrapper>
  );
};

export default ReviewOverview;
