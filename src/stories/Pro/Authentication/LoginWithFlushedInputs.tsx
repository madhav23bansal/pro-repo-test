import React, { useState } from 'react';
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Checkbox,
  CheckIcon,
  Image,
  Heading,
  WarningIcon,
  Toast,
  useToast,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
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
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginWithFlushedInputs = () => {
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
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

  return (
    <Wrapper>
      <HStack
        alignItems="center"
        justifyContent="center"
        h="$full"
        bg="$backgroundLight50"
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
      >
        <VStack
          maxWidth={400}
          p="$4"
          w="$full"
          alignItems="center"
          justifyContent="center"
          space="md"
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
            fontWeight="$semibold"
            letterSpacing={0.8}
          >
            Log in to your account
          </Heading>
          <HStack space="sm">
            <Text fontWeight="$light" size="md">
              Don't have an account?
            </Text>
            <Link href="" isExternal>
              <Text fontWeight="$medium" size="md">
                Sign up
              </Text>
            </Link>
          </HStack>
          <VStack w="$full" mt="$4">
            <FormControl isInvalid={!!errors?.email || !validated.emailValid}>
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
                  <Input
                    w="$full"
                    borderBottomLeftRadius="$none"
                    borderBottomRightRadius="$none"
                  >
                    <Input.Input
                      placeholder="Email"
                      type="text"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
              <FormControl.Error m="$1">
                <FormControl.Error.Icon as={WarningIcon} />
                <FormControl.Error.Text>
                  {errors?.email?.message ||
                    (!validated.emailValid && 'Email ID not found')}
                </FormControl.Error.Text>
              </FormControl.Error>
            </FormControl>
            <FormControl
              isInvalid={!!errors.password || !validated.passwordValid}
            >
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
                  <Input
                    w="$full"
                    borderTopLeftRadius="$none"
                    borderTopRightRadius="$none"
                  >
                    <Input.Input
                      placeholder="Password"
                      type="password"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
              />
              <FormControl.Error m="$1">
                <FormControl.Error.Icon as={WarningIcon} />
                <FormControl.Error.Text>
                  {errors?.password?.message ||
                    (!validated.passwordValid && 'Password was incorrect')}
                </FormControl.Error.Text>
              </FormControl.Error>
            </FormControl>
          </VStack>
          <HStack
            w="$full"
            justifyContent="space-between"
            alignItems="center"
            my="$3"
          >
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
              <Text textAlign="right" fontWeight="$medium" size="sm">
                Forgot Password
              </Text>
            </Link>
          </HStack>
          <Button w="$full" onPress={handleSubmit(onSubmit)}>
            <Button.Text textAlign="center" fontWeight="$medium">
              Sign in
            </Button.Text>
          </Button>
          <Button
            action="secondary"
            variant="outline"
            w="$full"
            onPress={() => {}}
          >
            <Icon as={GoogleIcon} />
            <Button.Text textAlign="center" fontWeight="$medium" ml="$3">
              Sign in with Google
            </Button.Text>
          </Button>
        </VStack>
      </HStack>
    </Wrapper>
  );
};

export default LoginWithFlushedInputs;
