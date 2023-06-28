// import { StyleSheet, Text, View } from "react-native";
// import Constants from "expo-constants";

// function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }

// let AppEntryPoint = App;

// if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
//   AppEntryPoint = require("./.ondevice").default;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default AppEntryPoint;

import * as Linking from 'expo-linking';

import React, { useState } from 'react';
// import { useFonts } from 'expo-font';

import './.ondevice/Storybook';
import { getStorybookUI } from '@storybook/react-native';

export default () => {
  const hasUrl = Linking.useURL();

  // Hack to mount a separate storybook component with initial selection in case of deep link.
  const [key, setKey] = useState(false);
  setTimeout(() => {
    setKey(true);
  }, 50);

  const StoryBook = React.useMemo(() => {
    if (hasUrl && key) {
      const storyId = Linking.parse(hasUrl)?.queryParams?.storyId;
      if (storyId)
        return getStorybookUI({
          initialSelection: storyId,
        });
    }
    return getStorybookUI({});
  }, [hasUrl, key]);

  return <StoryBook />;
};
