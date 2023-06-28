import React, { useMemo, useCallback } from 'react';
import Wrapper from '../../Wrapper';
import { Actionsheet, Button } from '../../../components';
import { useEffect } from 'react';

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

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <Actionsheet.Item onPress={handleClose} key={item}>
        <Actionsheet.ItemText>{item}</Actionsheet.ItemText>
      </Actionsheet.Item>
    ),
    [handleClose]
  );

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
          <Actionsheet.ScrollView>
            {data.map(renderItem)}
          </Actionsheet.ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
