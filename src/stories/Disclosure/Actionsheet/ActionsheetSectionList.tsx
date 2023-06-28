import React, { useCallback, useEffect } from 'react';
import Wrapper from '../../Wrapper';
import { Actionsheet, Button } from '../../../components';

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = useCallback(
    () => setShowActionsheet(!showActionsheet),
    [setShowActionsheet, showActionsheet]
  );

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <Wrapper>
      <Button onPress={handleClose}>
        <Button.Text>Open</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <Actionsheet.Item onPress={handleClose}>
                <Actionsheet.ItemText>{item}</Actionsheet.ItemText>
              </Actionsheet.Item>
            )}
            renderSectionHeader={({ section: { title, data } }) => (
              <Actionsheet.SectionHeaderText>
                {title} ({data.length})
              </Actionsheet.SectionHeaderText>
            )}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
