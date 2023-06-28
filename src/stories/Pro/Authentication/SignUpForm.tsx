import React from 'react';
import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  useToast,
  Toast,
  WarningIcon,
  Image,
  Heading,
} from '../../../components';
import Wrapper from '../../Wrapper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Keyboard } from 'react-native';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, G } from 'react-native-svg';

const signUpSchema = z.object({
  name: z.string().min(3, 'Enter atleast 3 characters'),
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
});
type SignUpSchemaType = z.infer<typeof signUpSchema>;

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

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const toast = useToast();

  const onSubmit = (_data: SignUpSchemaType) => {
    toast.show({
      placement: 'bottom-right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>Signed up successfully</Toast.Title>
          </Toast>
        );
      },
    });
    reset();
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      height="$full"
      bg="$backgroundLight50"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <VStack
        maxWidth={400}
        px="$4"
        w="$full"
        alignItems="center"
        justifyContent="center"
        space="lg"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../../../../assets/GlustackSubstitute.png')}
        />
        <Heading
          textAlign="center"
          fontWeight="$medium"
          fontSize="$2xl"
          sx={{
            '@md': { fontSize: '$3xl', lineHeight: '$3xl' },
          }}
        >
          Create an account
        </Heading>
        <Text textAlign="center" fontWeight="$light">
          Start making your dreams come true
        </Text>
        <FormControl isInvalid={!!errors.name} isRequired={true}>
          <FormControl.Label alignItems="flex-start">
            <FormControl.Label.Text mr="$1">Name</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="name"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ name: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <Input.Input
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
          <FormControl.Error>
            <FormControl.Error.Icon as={WarningIcon} />
            <FormControl.Error.Text>
              {errors?.name?.message}
            </FormControl.Error.Text>
          </FormControl.Error>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired={true}>
          <FormControl.Label alignItems="flex-start">
            <FormControl.Label.Text mr="$1">Email</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <Input.Input
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
          <FormControl.Error>
            <FormControl.Error.Icon as={WarningIcon} />
            <FormControl.Error.Text>
              {errors?.email?.message}
            </FormControl.Error.Text>
          </FormControl.Error>
        </FormControl>

        <FormControl isInvalid={!!errors.password} isRequired={true}>
          <FormControl.Label alignItems="flex-start">
            <FormControl.Label.Text mr="$1">Password</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ password: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input pr="$3">
                <Input.Input
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
          <FormControl.Error>
            <FormControl.Error.Icon as={WarningIcon} />
            <FormControl.Error.Text>
              {errors?.password?.message}
            </FormControl.Error.Text>
          </FormControl.Error>
          <FormControl.Helper>
            <FormControl.Helper.Text fontSize="$sm">
              At least 8 characters long
            </FormControl.Helper.Text>
          </FormControl.Helper>
        </FormControl>

        <Button mt="$3" w="$full" onPress={handleSubmit(onSubmit)}>
          <Button.Text fontWeight="$medium">Create account</Button.Text>
        </Button>
        <Button
          action="secondary"
          variant="outline"
          w="$full"
          onPress={() => {}}
        >
          <Button.Icon as={GoogleIcon} />
          <Button.Text fontWeight="$medium" ml="$3">
            Sign up with Google
          </Button.Text>
        </Button>
        <HStack mt="$4" space="sm">
          <Text size="sm">Already have an account?</Text>
          <Link href="" isExternal>
            <Text fontWeight="$medium" size="sm">
              Log in
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

const SignUpForm = () => {
  return (
    <Wrapper>
      <SignUp />
    </Wrapper>
  );
};

export default SignUpForm;
