import React from 'react';
import { Box, Divider, Button } from '../../../components';
import Wrapper from '../../Wrapper';

const DividerWithButtonGroup = () => {
  const handleGithub = () => {};
  const handleTwitter = () => {};
  const handleDiscord = () => {};

  return (
    <Wrapper>
      <Box alignItems="center" justifyContent="center" pt="$8">
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="$secondary200"
          borderRadius="$md"
          alignItems="center"
          sx={{
            _dark: { borderColor: '$trueGray600' },
          }}
        >
          <Button
            onPress={handleGithub}
            action="secondary"
            variant="outline"
            borderWidth="$0"
            borderTopRightRadius="$none"
            borderBottomRightRadius="$none"
            borderTopLeftRadius="$md"
            borderBottomLeftRadius="$md"
          >
            <Button.Text fontSize="$sm" lineHeight="$sm">
              GitHub
            </Button.Text>
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleTwitter}
            borderWidth="$0"
            borderRadius="$none"
          >
            <Button.Text fontSize="$sm" lineHeight="$sm">
              Twitter
            </Button.Text>
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleDiscord}
            borderWidth="$0"
            borderTopRightRadius="$md"
            borderBottomRightRadius="$md"
            borderTopLeftRadius="$none"
            borderBottomLeftRadius="$none"
          >
            <Button.Text fontSize="$sm" lineHeight="$sm">
              Discord
            </Button.Text>
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default DividerWithButtonGroup;
