import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from '../../../components';
import { ScrollView } from 'react-native';
import { TwitterIcon } from 'lucide-react-native';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, G } from 'react-native-svg';

type User = {
  id: number;
  name: string;
  designation: string;
  profilePic: string;
  message: string;
};

type TeamListProps = {
  user: User;
};

const TEAM_DATA: User[] = [
  {
    id: 0,
    name: 'John Doe',
    designation: 'Co-Founder / CEO',
    profilePic: require('../../../../assets/Team0F.jpeg'),
    message:
      'I am passionate about leading our team towards success and fostering a culture of innovation.',
  },
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Co-Founder / CEO',
    profilePic: require('../../../../assets/Team01M.jpeg'),
    message:
      'I believe in empowering our team to reach their full potential for remarkable results.',
  },
  {
    id: 2,
    name: 'David Johnson',
    designation: 'Marketing Manager',
    profilePic: require('../../../../assets/Team02M.jpeg'),
    message:
      'I create compelling marketing strategies that resonate with our target audience.',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'Manager, Business Relations',
    profilePic: require('../../../../assets/Team03M.jpeg'),
    message:
      'Building strong relationships with our partners for driving mutual growth and success.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    designation: 'Chief Operating Officer',
    profilePic: require('../../../../assets/Team04F.jpeg'),
    message:
      'I am dedicated to optimizing and ensuring seamless execution of our business strategies.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'Head of Human Resources',
    profilePic: require('../../../../assets/Team05M.jpeg'),
    message:
      'My mission is to foster a positive and inclusive work environment for our employees growth.',
  },
];

const LinkedInIcon: React.FC = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
    </G>
  ),
});

const GithubCircleIcon: React.FC = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
    </G>
  ),
});

const TeamList: React.FC<TeamListProps> = ({ user }) => {
  return (
    <VStack
      space="md"
      py="$8"
      w="$full"
      sx={{
        '@md': { flexBasis: '$1/2', px: '$8' },
        '@lg': { flexBasis: '$1/3' },
      }}
    >
      <Image
        w="$full"
        h="$72"
        source={{ uri: user.profilePic }}
        alt="Profile Image"
      />
      <VStack space="md">
        <VStack>
          <Text size="xl">{user.name}</Text>
          <Text color="$primary500" size="lg">
            {user.designation}
          </Text>
        </VStack>

        <HStack space="md">
          <Link href="">
            <Icon
              as={GithubCircleIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              size={20}
              width={20}
              height={20}
            />
          </Link>
          <Link href="">
            <Icon
              as={LinkedInIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              size={20}
              width={20}
              height={20}
            />
          </Link>
          <Link href="">
            <Icon
              as={TwitterIcon}
              sx={{
                color: '$backgroundLight600',
              }}
              fill="currentColor"
              size={20}
              width={20}
              height={20}
            />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

const TeamWithLargeImage = () => {
  return (
    <Wrapper>
      <ScrollView>
        <VStack
          w="$full"
          p="$8"
          alignItems="center"
          bg="$backgroundLight0"
          sx={{
            '@md': { py: '$24', px: '$16' },
            '_dark': { bg: '$backgroundDark950' },
          }}
        >
          <VStack
            w="$full"
            sx={{
              '@lg': {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            }}
          >
            <VStack flex={1} space="md" py="$3">
              <Text color="$primary500" fontWeight="semibold">
                We're hiring
              </Text>
              <Heading size="3xl" fontWeight="$normal">
                Meet our team
              </Heading>
              <Text size="xl" letterSpacing="$xl">
                Chocolate chip cookie dough ice cream sprinkled with caramel and
              </Text>
            </VStack>
            <Box
              flexDirection="column-reverse"
              mt="$2"
              sx={{ '@md': { flexDirection: 'row' } }}
            >
              <Button variant="outline" sx={{ '@md': { marginRight: '$2' } }}>
                <Button.Text>Contact us</Button.Text>
              </Button>
              <Button mb="$2" sx={{ '@md': { mb: '$0' } }}>
                <Button.Text>Join our team</Button.Text>
              </Button>
            </Box>
          </VStack>

          <VStack
            mt="$4"
            mb="$8"
            width="$full"
            alignItems="center"
            justifyContent="center"
            sx={{
              '@md': { flexDirection: 'row', flexWrap: 'wrap' },
            }}
          >
            {TEAM_DATA.map((user) => (
              <TeamList key={user.id} user={user} />
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </Wrapper>
  );
};

export default TeamWithLargeImage;
