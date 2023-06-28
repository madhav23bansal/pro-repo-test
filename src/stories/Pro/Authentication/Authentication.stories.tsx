import type { ComponentMeta } from '@storybook/react-native';
import LoginWithCentredForm from './LoginWithCentredForm';
import LoginWithEmailOrProvider from './LoginWithEmailOrProvider';
import SignUpWithQuote from './SignUpWithQuote';
import SignUpForm from './SignUpForm';
import LoginWithGoogleOrEmail from './LoginWithGoogleOrEmail';
import LoginWithEmailPasswordOrGoogle from './LoginWithEmailPasswordOrGoogle';
import LoginWithGradient from './LoginWithGradient';
import LoginWithFlushedInputs from './LoginWithFlushedInputs';
import LoginWithLeftBackground from './LoginWithLeftBackground';

const Authentication: ComponentMeta<typeof LoginWithCentredForm> = {
  title: 'stories/PRO/Authentication',
  component: LoginWithCentredForm,
};

export default Authentication;

export {
  LoginWithCentredForm,
  LoginWithEmailOrProvider,
  SignUpWithQuote,
  SignUpForm,
  LoginWithGoogleOrEmail,
  LoginWithEmailPasswordOrGoogle,
  LoginWithGradient,
  LoginWithFlushedInputs,
  LoginWithLeftBackground,
};
