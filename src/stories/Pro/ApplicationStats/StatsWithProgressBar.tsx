import React, { FC } from 'react';
import {
  Box,
  HStack,
  Progress,
  Text,
  VStack,
  Heading,
  Icon,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { Share2, ThumbsUp, Users } from 'lucide-react-native';

type Stat = {
  label: string;
  value: string;
  totalValue: string;
  percentage: number;
  icon: FC<any>;
  lightIconBg: string;
  darkIconBg: string;
  lightIconColor: string;
  darkIconColor: string;
};

type StatCardProps = {
  stat: Stat;
};

const StatCard: FC<StatCardProps> = ({ stat }) => {
  return (
    <VStack
      w="$full"
      mb="$4"
      bg="$backgroundLight0"
      borderRadius="$lg"
      p="$4"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          flex: 1,
          mx: '$2',
          p: '$6',
        },
        'shadowColor': '$backgroundLight800',
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Box>
          <Text size="sm">{stat.label}</Text>
          <Box flexDirection="row" alignItems="baseline">
            <Heading size="lg">{stat.value}</Heading>
            <Text size="xs" ml="$0.5">
              / {stat.totalValue}
            </Text>
          </Box>
        </Box>
        <Box
          p="$3.5"
          rounded="$full"
          bg={stat.lightIconBg}
          sx={{ _dark: { bg: stat.darkIconBg } }}
        >
          <Icon
            as={stat.icon}
            color={stat.lightIconColor}
            size="lg"
            strokeWidth={2}
            sx={{
              _dark: {
                color: stat.darkIconColor,
              },
            }}
          />
        </Box>
      </HStack>
      <HStack justifyContent="space-between" pt="$6">
        <HStack alignItems="center">
          <Box
            h="$1"
            w="$1"
            rounded="$full"
            bg="$primary600"
            sx={{ _dark: { bg: '$primary400' } }}
          />
          <Text size="xs" ml="$1.5">
            Monthly Goal
          </Text>
        </HStack>
        <Text size="xs">{stat.percentage}%</Text>
      </HStack>
      <Progress value={stat.percentage} size="xs" mt="$1.5">
        <Progress.FilledTrack />
      </Progress>
    </VStack>
  );
};

const stats: Stat[] = [
  {
    label: 'Total Followers',
    value: '60,340',
    totalValue: '1,00,000',
    percentage: 70,
    icon: Users,
    lightIconBg: '$pink100',
    darkIconBg: '$pink800',
    lightIconColor: '$pink600',
    darkIconColor: '$pink300',
  },
  {
    label: 'Total Likes',
    value: '36,880',
    totalValue: '50,000',
    percentage: 70,
    icon: ThumbsUp,
    lightIconBg: '$blue100',
    darkIconBg: '$blue800',
    lightIconColor: '$blue600',
    darkIconColor: '$blue300',
  },
  {
    label: 'Total Shares',
    value: '10,546',
    totalValue: '20,000',
    percentage: 70,
    icon: Share2,
    lightIconBg: '$success100',
    darkIconBg: '$green800',
    lightIconColor: '$green600',
    darkIconColor: '$green300',
  },
];

const StatsWithProgressBar: FC = () => {
  return (
    <Wrapper>
      <VStack
        maxWidth={1280}
        alignItems="center"
        mx="auto"
        w="$full"
        p="$4"
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            p: '$8',
          },
        }}
      >
        {stats.map((stat, index) => (
          <StatCard stat={stat} key={index} />
        ))}
      </VStack>
    </Wrapper>
  );
};

export default StatsWithProgressBar;
