import React, { FC } from 'react';
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { ScrollView } from 'react-native';
import { RadioIcon } from 'lucide-react-native';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, G } from 'react-native-svg';

const AugmentedRealityIcon: FC = createIcon({
  Root,
  viewBox: '0 0 20 20',
  path: (
    <G clip-path="url(#clip0_7963_57402)">
      <Path d="M0 10C0.00833333 4.48083 4.48083 0.00833333 10 0C15.5192 0.00833333 19.9917 4.48083 20 10C19.9917 15.5192 15.5192 19.9917 10 20C4.48083 19.9917 0.00833333 15.5192 0 10ZM10 19.17C12.0601 19.1721 14.0603 18.4769 15.675 17.1975L15.4225 16.6508C15.2772 16.6996 15.1191 16.6929 14.9784 16.6322C14.8377 16.5714 14.7244 16.4609 14.6602 16.3217C14.5961 16.1826 14.5856 16.0246 14.6307 15.8782C14.6759 15.7317 14.7736 15.6072 14.905 15.5283L14.3033 14.2258C14.0514 14.3074 13.7779 14.2894 13.5388 14.1757C13.2997 14.0619 13.1132 13.861 13.0175 13.6142L10.9558 14.1417V14.1517C10.9546 14.2389 10.9349 14.325 10.8983 14.4041C10.8616 14.4833 10.8087 14.5539 10.7429 14.6114C10.6772 14.6688 10.6001 14.7117 10.5167 14.7374C10.4333 14.7631 10.3455 14.771 10.2588 14.7606C10.1722 14.7501 10.0887 14.7215 10.0138 14.6767C9.93891 14.6319 9.87427 14.5719 9.82409 14.5005C9.77391 14.4291 9.7393 14.3479 9.72252 14.2623C9.70574 14.1766 9.70715 14.0884 9.72667 14.0033L6.83333 12.7583C6.72822 12.9409 6.57 13.087 6.37975 13.1774C6.18949 13.2678 5.97622 13.298 5.76833 13.2642L5.145 15.4225C5.25721 15.4811 5.34888 15.5726 5.40776 15.6847C5.46664 15.7968 5.48993 15.9242 5.47454 16.0499C5.45915 16.1755 5.4058 16.2935 5.32161 16.3881C5.23741 16.4827 5.12639 16.5493 5.00333 16.5792L5.04667 17.7125C6.52282 18.6654 8.24298 19.1721 10 19.17ZM4.79167 17.5417L4.755 16.59C4.59609 16.5645 4.45326 16.4784 4.35646 16.3498C4.25967 16.2212 4.21644 16.0601 4.23585 15.9003C4.25525 15.7406 4.33578 15.5945 4.46055 15.4928C4.58531 15.3912 4.7446 15.3418 4.905 15.355L5.52917 13.1967C5.3415 13.1171 5.18143 12.984 5.06895 12.814C4.95646 12.644 4.89654 12.4447 4.89667 12.2408L1.00167 11.7692C1.46713 14.1126 2.82641 16.1829 4.79167 17.5417ZM15.875 17.035C16.8183 16.2462 17.5946 15.277 18.1583 14.1842L14.97 13.5583C14.894 13.7911 14.7381 13.9894 14.53 14.1183L15.14 15.4417C15.2726 15.423 15.4076 15.4476 15.5251 15.5118C15.6425 15.576 15.7362 15.6764 15.7921 15.798C15.8481 15.9196 15.8633 16.056 15.8356 16.187C15.8079 16.3179 15.7387 16.4365 15.6383 16.525L15.8758 17.035H15.875ZM18.2733 13.9533C18.8653 12.7196 19.1718 11.3684 19.17 10C19.172 7.88296 18.4379 5.83108 17.0933 4.19583L15.8333 4.62583C15.8551 4.71732 15.8558 4.81254 15.8356 4.90437C15.8153 4.9962 15.7746 5.08227 15.7164 5.15614C15.6583 5.23002 15.5841 5.2898 15.4996 5.33102C15.4151 5.37224 15.3224 5.39382 15.2283 5.39417C15.1082 5.39418 14.9905 5.35941 14.8897 5.29405C14.7888 5.22869 14.7091 5.13554 14.66 5.02583L12.0408 5.91667C12.1576 6.3375 12.1387 6.78442 11.9868 7.1939C11.835 7.60337 11.5579 7.95455 11.195 8.1975L13.5758 12.2817C13.7396 12.2115 13.9187 12.1847 14.0958 12.2038C14.2729 12.2229 14.4421 12.2873 14.5871 12.3908C14.7322 12.4943 14.8481 12.6334 14.9238 12.7946C14.9994 12.9559 15.0323 13.134 15.0192 13.3117L18.2733 13.9533ZM10.9017 13.8967L12.9558 13.3717C12.9317 13.1895 12.9564 13.0041 13.0276 12.8347C13.0988 12.6652 13.2138 12.5178 13.3608 12.4075L10.9808 8.32417C10.6624 8.48642 10.3074 8.56327 9.9504 8.5472C9.59341 8.53113 9.2467 8.4227 8.94417 8.2325L6.63583 11.4758C6.77832 11.6063 6.88147 11.774 6.93361 11.96C6.98574 12.146 6.98478 12.3428 6.93083 12.5283L9.83333 13.7758C9.89811 13.6884 9.9847 13.6195 10.0845 13.576C10.1842 13.5325 10.2936 13.516 10.4018 13.528C10.5099 13.5401 10.613 13.5803 10.7007 13.6447C10.7885 13.7091 10.8578 13.7954 10.9017 13.895V13.8967ZM4.92667 11.9933C4.96474 11.8387 5.03784 11.695 5.14034 11.5732C5.24283 11.4513 5.37196 11.3547 5.51776 11.2908C5.66355 11.2268 5.8221 11.1972 5.98115 11.2043C6.14019 11.2114 6.29548 11.255 6.435 11.3317L8.74333 8.09C8.50123 7.89586 8.30588 7.64976 8.17173 7.36992C8.03758 7.09008 7.96807 6.78366 7.96833 6.47333C7.96833 5.97083 8.15083 5.485 8.4825 5.10667L5.39667 2.0725C3.78541 3.00893 2.49743 4.41371 1.70401 6.09998C0.910589 7.78626 0.649338 9.67413 0.955 11.5125L4.92583 11.9942L4.92667 11.9933ZM11.96 5.68333L14.605 4.78083V4.7725C14.6049 4.64178 14.646 4.51435 14.7225 4.4083C14.7989 4.30224 14.9068 4.22293 15.0308 4.18162C15.1548 4.14031 15.2887 4.13909 15.4134 4.17814C15.5382 4.21719 15.6475 4.29452 15.7258 4.39917L16.92 3.99167C15.5531 2.41209 13.6869 1.34767 11.6315 0.975212C9.57608 0.602753 7.45509 0.944668 5.62083 1.94417L8.65417 4.92833C8.90129 4.70622 9.19814 4.5467 9.51974 4.46319C9.84135 4.37969 10.1783 4.37463 10.5023 4.44846C10.8262 4.52228 11.1277 4.67283 11.3814 4.88743C11.6351 5.10203 11.8335 5.37441 11.96 5.68167L11.9583 5.68417L11.96 5.68333Z" />
    </G>
  ),
});

const WifiIcon: FC = createIcon({
  Root,
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path d="M10 3.33301C6.09167 3.33301 2.55833 4.91634 0 7.48301L10 17.4997L14.1667 13.3247V6.66634H19.1C16.6417 4.59134 13.4667 3.33301 10 3.33301ZM15.8333 14.9997H17.5V16.6663H15.8333V14.9997Z" />
      <Path d="M15.833 8.33301H17.4997V13.333H15.833V8.33301Z" />
    </G>
  ),
});

const RealTimeCollaborationIcon: FC = createIcon({
  Root,
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path d="M15.854 1.14566C15.7601 1.05177 15.6328 0.999023 15.5 0.999023C15.3672 0.999023 15.2399 1.05177 15.146 1.14566C15.0521 1.23954 14.9994 1.36688 14.9994 1.49966C14.9994 1.63243 15.0521 1.75977 15.146 1.85366C16.282 2.98866 16.875 4.72366 16.875 6.49966C16.875 8.27566 16.282 10.0107 15.146 11.1457C15.0521 11.2395 14.9994 11.3669 14.9994 11.4997C14.9994 11.6324 15.0521 11.7598 15.146 11.8537C15.2399 11.9475 15.3672 12.0003 15.5 12.0003C15.6328 12.0003 15.7601 11.9475 15.854 11.8537C17.218 10.4887 17.875 8.47366 17.875 6.49966C17.875 4.52566 17.218 2.51066 15.854 1.14566ZM13.854 3.14566C13.8075 3.09917 13.7523 3.06229 13.6916 3.03713C13.6308 3.01197 13.5657 2.99902 13.5 2.99902C13.4343 2.99902 13.3692 3.01197 13.3084 3.03713C13.2477 3.06229 13.1925 3.09917 13.146 3.14566C13.0995 3.19214 13.0626 3.24733 13.0375 3.30807C13.0123 3.36881 12.9994 3.43391 12.9994 3.49966C12.9994 3.5654 13.0123 3.6305 13.0375 3.69124C13.0626 3.75198 13.0995 3.80717 13.146 3.85366C13.781 4.48866 14.125 5.47366 14.125 6.49966C14.125 7.52566 13.781 8.51066 13.146 9.14566C13.0521 9.23954 12.9994 9.36688 12.9994 9.49966C12.9994 9.63243 13.0521 9.75977 13.146 9.85366C13.2399 9.94754 13.3672 10.0003 13.5 10.0003C13.6328 10.0003 13.7601 9.94754 13.854 9.85366C14.719 8.98866 15.125 7.72366 15.125 6.49966C15.125 5.27566 14.719 4.01066 13.854 3.14566ZM4 6.99966C4 5.93879 4.42143 4.92137 5.17157 4.17123C5.92172 3.42108 6.93913 2.99966 8 2.99966C9.06087 2.99966 10.0783 3.42108 10.8284 4.17123C11.5786 4.92137 12 5.93879 12 6.99966C12 8.06052 11.5786 9.07794 10.8284 9.82808C10.0783 10.5782 9.06087 10.9997 8 10.9997C6.93913 10.9997 5.92172 10.5782 5.17157 9.82808C4.42143 9.07794 4 8.06052 4 6.99966ZM1 13.9997C1 12.8867 1.903 11.9997 3.009 11.9997H13C13.5304 11.9997 14.0391 12.2104 14.4142 12.5854C14.7893 12.9605 15 13.4692 15 13.9997C15 15.6907 14.167 16.9657 12.865 17.7967C11.583 18.6137 9.855 18.9997 8 18.9997C6.145 18.9997 4.417 18.6137 3.135 17.7967C1.833 16.9667 1 15.6897 1 13.9997Z" />
    </G>
  ),
});

interface FeatureData {
  id: number;
  icon: any;
  title: string;
  description: string;
  lightIconBg: string;
  darkIconBg: string;
  lightIconColor?: string;
  darkIconColor?: string;
}

const features: FeatureData[] = [
  {
    id: 1,
    icon: AugmentedRealityIcon,
    title: 'Augmented Reality',
    description:
      'Immerse yourself in a world where virtual and real-life blend seamlessly, bringing new dimensions to your mobile experience.',
    lightIconBg: '$orange100',
    darkIconBg: '$orange800',
    lightIconColor: '$orange600',
    darkIconColor: '$orange300',
  },
  {
    id: 2,
    icon: WifiIcon,
    title: 'Offline Mode',
    description:
      'Access key features and content even without an internet connection, ensuring uninterrupted app usage in any situation.',
    lightIconBg: '$blue100',
    darkIconBg: '$blue800',
    lightIconColor: '$blue600',
    darkIconColor: '$blue300',
  },
  {
    id: 3,
    icon: RadioIcon,
    title: 'Voice Recognition',
    description:
      'Interact with the app effortlessly using voice commands, making tasks faster and hands-free.',
    lightIconBg: '$green100',
    darkIconBg: '$green800',
    lightIconColor: '$green600',
    darkIconColor: '$green300',
  },
  {
    id: 4,
    icon: RealTimeCollaborationIcon,
    title: 'Real-time Collaboration',
    description:
      'Collaborate with friends, colleagues, or fellow app users in real-time, fostering teamwork and shared experiences.',
    lightIconBg: '$pink100',
    darkIconBg: '$pink800',
    lightIconColor: '$pink600',
    darkIconColor: '$pink300',
  },
];

const Feature = ({
  feature,
  index,
}: {
  feature: FeatureData;
  index: number;
}) => {
  return (
    <HStack
      mt={index === 0 ? '$0' : '$9'}
      space="2xl"
      alignItems="flex-start"
      key={index}
    >
      <Box
        p="$3.5"
        rounded="$full"
        bg={feature.lightIconBg}
        sx={{ _dark: { bg: feature.darkIconBg } }}
      >
        <Icon
          as={feature.icon}
          color={feature.lightIconColor}
          size="lg"
          sx={{
            _dark: {
              color: feature.darkIconColor,
            },
          }}
        />
      </Box>
      <VStack space="xs" flexShrink={1}>
        <Text
          fontSize="$md"
          lineHeight="$lg"
          fontWeight="$bold"
          letterSpacing="$sm"
          color="$textLight900"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {feature?.title}
        </Text>
        <Text size="sm">{feature?.description}</Text>
      </VStack>
    </HStack>
  );
};

const FeatureSideBySideImage: FC = () => {
  return (
    <Wrapper>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Box
          bg="$backgroundLight0"
          sx={{
            _dark: {
              bg: '$backgroundDark950',
            },
          }}
        >
          <VStack
            py="$16"
            px="$8"
            alignItems="flex-start"
            justifyContent="flex-start"
            sx={{
              '@md': {
                alignItems: 'center',
                justifyContent: 'center',
                px: '$0',
              },
            }}
          >
            <Text
              fontSize="$sm"
              lineHeight="$xs"
              fontWeight="$bold"
              fontStyle="normal"
              letterSpacing="$sm"
              color="$primary600"
              sx={{
                '_dark': {
                  color: '$primary300',
                },
                '@md': {
                  fontSize: '$md',
                  lineHeight: '$lg',
                },
              }}
            >
              Revolutionary Features
            </Text>
            <Heading
              fontSize="$3xl"
              lineHeight="$3xl"
              pt="$1.5"
              sx={{
                '@md': {
                  fontSize: '$4xl',
                  lineHeight: '$5xl',
                  pt: '$1',
                },
              }}
            >
              Unleash Your Creativity
            </Heading>
            <Text
              fontSize="$sm"
              lineHeight="$xs"
              pt="$1.5"
              sx={{
                '@md': {
                  fontSize: '$lg',
                  lineHeight: '$xl',
                  pt: '$1',
                },
              }}
            >
              Experience the cutting-edge features that redefine mobile app
              functionality.
            </Text>
          </VStack>

          <Box
            flexDirection="column"
            sx={{
              '@md': {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            }}
          >
            <Image
              height={350}
              sx={{
                '@md': {
                  flex: 1,
                  height: '$full',
                },
              }}
              source={{
                uri: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
              }}
            />
            <VStack
              py="$10"
              px="$8"
              sx={{
                '@md': {
                  flex: 1,
                  px: '$16',
                },
              }}
            >
              {features?.map((feature, i) => (
                <Feature key={feature?.id} feature={feature} index={i} />
              ))}
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </Wrapper>
  );
};

export default FeatureSideBySideImage;
