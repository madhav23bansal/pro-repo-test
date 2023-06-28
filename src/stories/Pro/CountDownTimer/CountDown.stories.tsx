import type { ComponentMeta } from '@storybook/react-native';
import CountDownOnBlack from './CountDownOnBlack';
import CountDownOnColoredBackground from './CountDownOnColoredBackground';

const UserCard: ComponentMeta<typeof CountDownOnBlack> = {
  title: 'stories/PRO/CountDownTimer',
  component: CountDownOnBlack,
};

export default UserCard;

export { CountDownOnBlack, CountDownOnColoredBackground };
