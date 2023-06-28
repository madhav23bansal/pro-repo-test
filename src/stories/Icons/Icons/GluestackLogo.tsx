import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../../../components/core/Icons/styled-components';
import { Path, Rect } from 'react-native-svg';

const GluestackLogoDark: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect width="7.20006" height="7.20006" rx="2" fill="#262626" />
      <Rect
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="8.40051"
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        y="8.39996"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Rect
        x="16.8009"
        y="16.7999"
        width="7.20006"
        height="7.20006"
        rx="2"
        fill="#262626"
      />
      <Path
        d="M7.33335 5.00006H8.88892V19.0002H7.33335V5.00006ZM5 5.00006H6.55557V19.0002H5V5.00006ZM9.66671 5.00006H11.2223V19.0002H9.66671V5.00006ZM16.715 18.8384L11.8748 5.70162L13.3347 5.1634L18.1749 18.3002L16.715 18.8384Z"
        fill="#0077E6"
      />
    </>
  ),
});

const GluestackLogo: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="8.40015"
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="0.000488281"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="8.40015"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Rect
        x="16.8003"
        y="16.7997"
        width="7.19977"
        height="7.19977"
        rx="2"
        fill="#EBEBEB"
      />
      <Path
        d="M7.33314 5.00031H8.88864V18.9998H7.33314V5.00031ZM4.99988 5.00031H6.55538V18.9998H4.99988V5.00031ZM9.66639 5.00031H11.2219V18.9998H9.66639V5.00031ZM16.7144 18.8381L11.8744 5.70184L13.3343 5.16363L18.1742 18.2999L16.7144 18.8381Z"
        fill="#005DB4"
      />
    </>
  ),
});

GluestackLogo.displayName = 'GluestackLogo';
GluestackLogoDark.displayName = 'GluestackLogo';

export { GluestackLogoDark, GluestackLogo };
