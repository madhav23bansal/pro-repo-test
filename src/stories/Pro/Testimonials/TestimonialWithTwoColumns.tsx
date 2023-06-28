/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import { SlackIcon } from 'lucide-react-native';
import Wrapper from '../../Wrapper';
import { Avatar, Icon, Text, VStack } from '../../../components';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, Rect } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';

type PersonProps = {
  person: {
    id: number;
    name: string;
    designation: string;
    profilePic: string;
    message: string;
    icon: React.FC;
    darkIcon: React.FC;
    color: string;
  };
};

const GluestackLogoDark = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect width="7.20006" height="7.20006" rx="2" fill="#262626" />
      <Rect
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Path
        d="M7.33335 5.00006H8.88892V19.0002H7.33335V5.00006ZM5 5.00006H6.55557V19.0002H5V5.00006ZM9.66671 5.00006H11.2223V19.0002H9.66671V5.00006ZM16.715 18.8384L11.8748 5.70162L13.3347 5.1634L18.1749 18.3002L16.715 18.8384Z"
        fill="#0077E6"
      />
    </>
  ),
});

const GluestackLogo = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Path
        d="M7.33314 5.00031H8.88864V18.9998H7.33314V5.00031ZM4.99988 5.00031H6.55538V18.9998H4.99988V5.00031ZM9.66639 5.00031H11.2219V18.9998H9.66639V5.00031ZM16.7144 18.8381L11.8744 5.70184L13.3343 5.16363L18.1742 18.2999L16.7144 18.8381Z"
        fill="#005DB4"
      />
    </>
  ),
});

const TESTIMONIAL_DATA = [
  {
    id: 0,
    name: 'Sarah Johnson',
    designation: 'Senior UI Designer, Logoipsum',
    profilePic:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    message: `"I had the pleasure of using Glue-Stack UI for a number of our projects while working as a senior user interface designer at Logoipsum Inc. It has completely changed the game for our team."`,
    icon: GluestackLogo,
    darkIcon: GluestackLogoDark,
    color: 'none',
  },
  {
    id: 1,
    name: 'David Smith',
    designation: 'Lead Developer, ABC Inc.',
    profilePic:
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: `"I've had the chance to work with Glue-Stack UI on several projects as the principal developer at ABC Inc. It is undoubtedly among the best UI libraries I have ever used, in my opinion."`,
    icon: SlackIcon,
    darkIcon: SlackIcon,
    color: '$rose500',
  },
];

const Person = ({ person }: PersonProps) => {
  return (
    <VStack
      sx={{
        '@md': { flexBasis: '$1/2' },
      }}
    >
      <VStack
        alignItems="center"
        space="lg"
        p="$4"
        m="$2"
        sx={{ '@md': { p: '$6' } }}
      >
        <Icon
          as={person.icon}
          sx={{ _dark: { props: { as: person.darkIcon } } }}
          size={40}
          width={40}
          height={40}
          color={person.color}
          fill="currentColor"
        />
        <Text
          fontSize="$lg"
          lineHeight="$lg"
          textAlign="center"
          sx={{
            '@md': {
              fontSize: '$xl',
              lineHeight: '$xl',
            },
          }}
        >
          {person.message}
        </Text>
        <VStack alignItems="center" space="sm">
          <Avatar>
            <Avatar.Image
              source={{ uri: person.profilePic }}
              width={'$16'}
              height={'$16'}
            />
            <Avatar.FallbackText>{person.name}</Avatar.FallbackText>
          </Avatar>
          <Text textAlign="center" fontWeight="$semibold">
            {person.name}
          </Text>
          <Text textAlign="center" size="md" fontWeight="$light">
            {person.designation}
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

const TestimonialWithTwoColumns = () => {
  return (
    <Wrapper>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <VStack
          width="$full"
          height="$full"
          alignSelf="center"
          alignItems="center"
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
            '@lg': { width: '80%' },
          }}
        >
          {TESTIMONIAL_DATA.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </VStack>
      </ScrollView>
    </Wrapper>
  );
};

export default TestimonialWithTwoColumns;
