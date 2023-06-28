import React from 'react';
import Wrapper from '../../Wrapper';
import { Input, Center } from '../../../components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <Center justifyContent="center" w="50%" alignItems="center" h={300}>
        <Input {...props}>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
        </Input>
      </Center>
    </Wrapper>
  );
};

export { InputStory, Input, Center };
