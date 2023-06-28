import React from 'react';
import { ScrollView } from 'react-native';
import { PieChartIcon } from 'lucide-react-native';
import { G, Path } from 'react-native-svg';
import Wrapper from '../../Wrapper';
import { Avatar, HStack, Icon, Text, VStack } from '../../../components';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../../../components/core/Icons/styled-components';

type PersonProps = {
  person: {
    id: number;
    name: string;
    designation: string;
    profilePic: string;
    message: string;
    heading: string;
    icon: React.FC;
    bg: string;
    darkBg: string;
    quotesColor: string;
  };
};

const MessageSqaureIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
});

const QuotesLeftIcon = createIcon({
  Root,
  viewBox: '0 0 16 17',
  path: (
    <G stroke="currentColor" fill="currentColor" stroke-width="1">
      <Path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z" />
    </G>
  ),
});

const QuotesRightIcon = createIcon({
  Root,
  viewBox: '0 0 16 17',
  path: (
    <G stroke="currentColor" fill="currentColor" stroke-width="0">
      <Path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z" />
    </G>
  ),
});

const TESTIMONIAL_DATA = [
  {
    id: 0,
    name: 'Sarah Johnson',
    designation: 'Chief Technology Officer, Plumtic HQ',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message:
      'Consectetur adipiscing elit, lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do. Ut enim',
    heading: 'PLUMTIC',
    icon: PieChartIcon,
    bg: '$lightBlue800',
    darkBg: '$lightBlue500',
    quotesColor: '$lightBlue200',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    designation: 'Marketing Manager, Chat Monkey',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message:
      'Consectetur adipiscing elit, lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do. Ut enim',
    heading: 'Chat Monkey',
    icon: MessageSqaureIcon,
    bg: '$pink600',
    darkBg: '$pink400',
    quotesColor: '$pink200',
  },
];

const Card = ({ person }: PersonProps) => {
  return (
    <VStack
      sx={{
        '@md': { flexBasis: '$1/2' },
      }}
    >
      <VStack
        space="sm"
        bg="$backgroundLight0"
        rounded="$xl"
        my="$4"
        overflow="hidden"
        sx={{
          '@md': { m: '$6' },
          '_dark': { bg: '$backgroundDark950' },
          'shadowColor': '$backgroundLight800',
          //@ts-ignore
          'shadowOffset': {
            width: 0,
            height: 1,
          },
          'shadowOpacity': 0.22,
          'shadowRadius': 2.22,
          'elevation': 3,
        }}
      >
        <VStack p="$3" sx={{ '@md': { p: '$6' } }} space="md" flex={1}>
          <Icon
            size={30}
            width={30}
            height={30}
            as={QuotesLeftIcon}
            color={person.quotesColor}
            transform={[{ translateY: 10 }]}
          />
          <HStack space="md" justifyContent="center" alignItems="center">
            <Icon size={25} width={25} height={25} as={person.icon} />
            <Text color="$text400" size="lg" fontWeight="$semibold">
              {person.heading}
            </Text>
          </HStack>
          <Text
            px="$4"
            sx={{ '@md': { p: '$8' } }}
            size="lg"
            textAlign="center"
          >
            {person.message}
          </Text>
          <Icon
            size={30}
            width={30}
            height={30}
            as={QuotesRightIcon}
            color={person.quotesColor}
            sx={{ '@base': { props: { alignSelf: 'flex-end' } } }}
          />
        </VStack>
        <VStack
          //@ts-ignore
          borderTopRightRadius={'100%'}
          //@ts-ignore
          borderTopLeftRadius={'100%'}
          alignItems="center"
          bg={person.bg}
          sx={{ _dark: { bg: person.darkBg } }}
        >
          <Avatar transform={[{ translateY: -20 }]}>
            <Avatar.Image
              source={{ uri: person.profilePic }}
              width={'$16'}
              height={'$16'}
              borderWidth={5}
              borderColor={person.bg}
              sx={{ _dark: { borderColor: person.darkBg } }}
            />
            <Avatar.FallbackText>{person.name}</Avatar.FallbackText>
          </Avatar>
          <VStack transform={[{ translateY: -20 }]} p="$2">
            <Text textAlign="center" fontWeight="$semibold" color="$white">
              {person.name}
            </Text>
            <Text
              textAlign="center"
              size="md"
              fontWeight="$light"
              color="$white"
            >
              {person.designation}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

const TestimonialWithCurve = () => {
  return (
    <Wrapper>
      <ScrollView>
        <VStack
          width="$full"
          height="$full"
          alignSelf="center"
          alignItems="center"
          space="md"
          p="$4"
          sx={{
            '@sm': { width: '80%' },
            '@md': { flexDirection: 'row', flexWrap: 'wrap' },
            '@lg': {
              p: '$6',
            },
          }}
        >
          {TESTIMONIAL_DATA.map((person) => (
            <Card key={person.id} person={person} />
          ))}
        </VStack>
      </ScrollView>
    </Wrapper>
  );
};

export default TestimonialWithCurve;
