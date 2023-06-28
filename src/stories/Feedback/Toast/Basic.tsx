import React from 'react';
import { Button, Toast, useToast } from '../../../components';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';

export function Basic(props: any) {
  return (
    <>
      <Wrapper>
        <ToastWithHook {...props} />
      </Wrapper>
    </>
  );
}

const ToastWithHook = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            render: ({ id }) => {
              return (
                <Toast nativeId={id} {...props}>
                  <Toast.Title>Hello World Toast {id}</Toast.Title>
                </Toast>
              );
            },
          });
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </View>
  );
};
