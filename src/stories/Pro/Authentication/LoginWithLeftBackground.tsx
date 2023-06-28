import React, { useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  CheckIcon,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Toast,
  VStack,
  WarningIcon,
  useToast,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, G } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';

const USERS = [
  {
    email: 'gabrial@gmail.com',
    password: 'Gabrial@123',
  },
  {
    email: 'tom@gmail.com',
    password: 'Tom@123',
  },
  {
    email: 'thomas@gmail.com',
    password: 'Thomas@1234',
  },
];

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const GoogleIcon: any = createIcon({
  Root,
  viewBox: '0 0 48 48',
  path: (
    <G>
      <Path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <Path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <Path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <Path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </G>
  ),
});

const ProfileAvatars = [
  require('../../../../assets/AuthModule/avatar.jpeg'),
  require('../../../../assets/AuthModule/avatar2.jpeg'),
  require('../../../../assets/AuthModule/avatar3.jpeg'),
  require('../../../../assets/AuthModule/avatar4.jpeg'),
];

const LoginLeft = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      if (user.password !== data.password)
        setValidated({ emailValid: true, passwordValid: false });
      else {
        setValidated({ emailValid: true, passwordValid: true });
        toast.show({
          placement: 'bottom-right',
          render: ({ id }) => {
            return (
              <Toast nativeID={id} variant="accent" action="success">
                <Toast.Title>Logged in successfully!</Toast.Title>
              </Toast>
            );
          },
        });
        reset();
      }
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const formDetails = {
    heading: ' Gluestack UI',
    badge: 'Pro',
    subHeading: 'Start making your dreams come true',
    description:
      'Create an account and discover the worlds best UI component framework.',
    avatarNumber: '+ 2',
    subDescription: 'Join 10,000+ users',
    license: ' © 2023 Gluestack UI. All rights reserved.',
  };

  return (
    <HStack
      alignItems="center"
      h="$full"
      bg="$backgroundLight50"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <VStack
        bg="$primary500"
        w="$0"
        display="none"
        sx={{
          '@md': {
            minWidth: '50%',
            h: '$full',
            display: 'flex',
            pr: '$4',
          },
          '@lg': { pr: '$16' },
        }}
        alignItems="flex-start"
        justifyContent="space-between"
        pl="$8"
        py="$4"
        space="md"
      >
        <HStack alignItems="center" space="sm">
          <Image
            height="$16"
            width="$16"
            source={require('../../../../assets/GlustackSubstitute.png')}
          />
          <Heading fontWeight="$medium" size="xl" color="$white">
            {formDetails.heading}
          </Heading>
          <Badge
            bg="$backgroundLight50"
            sx={{
              _dark: {
                bg: '$backgroundLight50',
              },
            }}
          >
            <Badge.Text
              color="$primary500"
              sx={{
                _dark: {
                  color: '$primary500',
                },
              }}
              fontWeight="$bold"
              px="$1"
              fontSize={16}
            >
              {formDetails.badge}
            </Badge.Text>
          </Badge>
        </HStack>
        <VStack space="3xl">
          <Heading
            sx={{
              '@md': { w: '98%', fontSize: '$5xl' },
            }}
            color="$white"
            fontWeight="$medium"
            fontSize="$3xl"
            lineHeight="$3xl"
            numberOfLines={5}
          >
            {formDetails.subHeading}
          </Heading>
          <Text size="md" color="$white" letterSpacing={0.5}>
            {formDetails.description}
          </Text>
          <HStack ml="$2" alignItems="center">
            <HStack justifyContent="center" alignItems="center">
              {/* @ts-ignore */}
              <Avatar.Group>
                {ProfileAvatars.slice(0, 2).map((avatar) => {
                  return (
                    <Avatar
                      display="flex"
                      sx={{
                        '@lg': { display: 'none' },
                      }}
                      size="md"
                    >
                      <Avatar.Image
                        source={avatar}
                        borderColor="$white"
                        borderWidth="$2"
                      />
                    </Avatar>
                  );
                })}
                {ProfileAvatars.map((avatar) => {
                  return (
                    <Avatar
                      display="none"
                      sx={{
                        '@lg': { display: 'flex' },
                      }}
                      size="md"
                    >
                      <Avatar.Image
                        source={avatar}
                        borderColor="$white"
                        borderWidth="$2"
                      />
                    </Avatar>
                  );
                })}
                <Avatar
                  display="flex"
                  sx={{
                    '@lg': { display: 'none' },
                  }}
                  size="md"
                >
                  <Avatar.FallbackText>
                    {formDetails.avatarNumber}
                  </Avatar.FallbackText>
                </Avatar>
              </Avatar.Group>
            </HStack>
            <Text ml="$6" color="$white">
              {formDetails.subDescription}
            </Text>
          </HStack>
        </VStack>
        <Heading
          fontWeight="$light"
          size="xs"
          color="$backgroundDark200"
          mb="$4"
          letterSpacing={0.4}
        >
          {formDetails.license}
        </Heading>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        w="$full"
        maxWidth={440}
        p="$4"
        m="auto"
        sx={{
          '@lg': {
            w: '$full',
          },
        }}
        space="lg"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../../../../assets/GlustackSubstitute.png')}
        />
        <Heading
          textAlign="center"
          size="xl"
          sx={{
            '@md': { fontSize: '$3xl' },
          }}
          letterSpacing={0.8}
        >
          Log in to your account
        </Heading>
        <HStack>
          <Text fontWeight="$light" size="md">
            Don't have an account?
          </Text>
          <Link href="" isExternal>
            <Text fontWeight="$medium" ml="$1" size="md">
              Sign up
            </Text>
          </Link>
        </HStack>
        <FormControl isInvalid={!!errors?.email || !validated.emailValid}>
          <FormControl.Label>
            <FormControl.Label.Text>Email</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await loginSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <Input.Input
                  placeholder="Enter your email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControl.Error>
            <FormControl.Error.Icon as={WarningIcon} />
            <FormControl.Error.Text>
              {errors?.email?.message ||
                (!validated.emailValid && 'Email ID not found')}
            </FormControl.Error.Text>
          </FormControl.Error>
        </FormControl>
        {/* Label Message */}
        <FormControl isInvalid={!!errors.password || !validated.passwordValid}>
          <FormControl.Label>
            <FormControl.Label.Text>Password</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await loginSchema.parseAsync({ password: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <Input.Input
                  type="password"
                  placeholder="******"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControl.Error>
            <FormControl.Error.Icon as={WarningIcon} />
            <FormControl.Error.Text>
              {errors?.password?.message ||
                (!validated.passwordValid && 'Password was incorrect')}
            </FormControl.Error.Text>
          </FormControl.Error>
        </FormControl>
        <HStack w="$full" justifyContent="space-between" alignItems="center">
          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                size="sm"
                value="Remember me"
                isChecked={value}
                onChange={onChange}
                aria-label="Remember me"
              >
                <Checkbox.Indicator mr="$2">
                  <Checkbox.Icon as={CheckIcon} />
                </Checkbox.Indicator>
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox>
            )}
          />
          <Link href="" isExternal>
            <Text textAlign="right" ml="$1" fontWeight="$medium" fontSize="$sm">
              Forgot Password?
            </Text>
          </Link>
        </HStack>
        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <Button.Text fontWeight="$medium">Sign in</Button.Text>
        </Button>
        <Button
          variant="outline"
          action="secondary"
          w="$full"
          onPress={() => {}}
        >
          <Button.Icon as={GoogleIcon} />
          <Button.Text fontWeight="$medium" ml="$3">
            Continue with Google
          </Button.Text>
        </Button>
      </VStack>
    </HStack>
  );
};

const LoginWithLeftBackground = () => {
  return (
    <Wrapper>
      <LoginLeft />
    </Wrapper>
  );
};

export default LoginWithLeftBackground;
