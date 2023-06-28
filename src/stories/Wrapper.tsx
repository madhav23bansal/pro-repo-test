/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode, useEffect } from 'react';

import { useDarkMode } from './utils/hooks/useDarkMode';
import { GluestackUIProvider } from '../components';
import { config } from '../../gluestack-ui.config';
import { Dimensions, Platform, TouchableOpacity, View } from 'react-native';
import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react-native';
import { addons, Channel } from '@storybook/addons';

const Wrapper: ({ children }: { children: JSX.Element }) => JSX.Element = ({
  children,
}) => {
  const isWeb = Platform.OS === 'web';

  let channels: null | Channel = null;

  if (!isWeb) {
    channels = addons.getChannel();
  }

  const value = useDarkMode();

  const [isDark, setIsDark] = React.useState(false);

  function getColorMode() {
    if (isWeb) {
      return value ? 'dark' : 'light';
    } else {
      return isDark ? 'dark' : 'light';
    }
  }

  useEffect(() => {
    !isWeb && channels?.on('DARK_MODE', setIsDark);
  }, [isWeb, channels]);

  const handleDarkToggle = () => {
    !isWeb && channels?.emit('DARK_MODE', !isDark);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getWrapper = (children: ReactNode) => {
    return (
      <View
        style={{
          flex: 1,
          height: Dimensions.get('window').height,
          backgroundColor: getColorMode() === 'light' ? '#FFF' : '#000',
        }}
      >
        {!isWeb && (
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', paddingRight: 12 }}
            onPress={handleDarkToggle}
          >
            {isDark ? (
              <LightbulbIcon color="white" />
            ) : (
              <LightbulbOffIcon color="black" />
            )}
          </TouchableOpacity>
        )}
        {children}
      </View>
    );
  };

  return getWrapper(
    <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
      {children}
    </GluestackUIProvider>
  );
};

export default Wrapper;
