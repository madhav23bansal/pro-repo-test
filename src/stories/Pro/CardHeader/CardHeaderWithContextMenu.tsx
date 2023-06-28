import React from 'react';
import Wrapper from '../../Wrapper';
import { HStack, Icon, Heading, Pressable, Menu } from '../../../components';
import { MoreVertical } from 'lucide-react-native';

const CardHeaderWithContextMenu = () => {
  return (
    <Wrapper>
      <HStack
        m="$4"
        alignItems="center"
        justifyContent="space-between"
        bg="$backgroundLight0"
        p="$6"
        rounded="$lg"
        sx={{
          '_dark': {
            bg: '$backgroundDark950',
          },
          '@md': {
            m: '$8',
          },
          'shadowColor': '$backgroundLight800',
          // @ts-ignore
          'shadowOffset': {
            width: 0,
            height: 1,
          },
          'shadowOpacity': 0.22,
          'shadowRadius': 2.22,
          'elevation': 3,
        }}
      >
        <Heading fontWeight="normal">Member Overview</Heading>

        <Menu
          placement="bottom right"
          offset={10}
          // eslint-disable-next-line react/no-unstable-nested-components
          trigger={(triggerProps) => {
            return (
              <Pressable {...triggerProps}>
                <Icon
                  as={MoreVertical}
                  color="$backgroundDark950"
                  sx={{
                    _dark: {
                      color: '$white',
                    },
                  }}
                />
              </Pressable>
            );
          }}
        >
          <Menu.Item key="Profile" textValue="Profile">
            <Menu.ItemLabel>Profile</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="Settings" textValue="Settings">
            <Menu.ItemLabel>Settings</Menu.ItemLabel>
          </Menu.Item>
          <Menu.Item key="Log out" textValue="Log out">
            <Menu.ItemLabel>Log out</Menu.ItemLabel>
          </Menu.Item>
        </Menu>
      </HStack>
    </Wrapper>
  );
};

export default CardHeaderWithContextMenu;
