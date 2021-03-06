import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSettings(props) {
  const { width = 30, height = 30, fill = "#fff" } = props;

  return (
    <Svg width={width} height={height} {...props}>
      <Path
        d="M29.49 13.11c-.24-.15-2.13-1.29-2.88-1.62l-.93-2.25c.27-.75.81-2.82.9-3.18a.978.978 0 00-.27-.93l-1.47-1.47a.978.978 0 00-.93-.27c-.27.06-2.4.6-3.18.9l-2.25-.93c-.33-.72-1.44-2.58-1.62-2.88a.994.994 0 00-.84-.48h-2.07a.994.994 0 00-.84.48c-.15.24-1.29 2.13-1.62 2.88l-2.25.93c-.75-.27-2.82-.81-3.18-.9a.978.978 0 00-.93.27L3.66 5.13a.978.978 0 00-.27.93c.06.27.6 2.4.9 3.18l-.93 2.25c-.72.33-2.58 1.44-2.88 1.62a.994.994 0 00-.48.84v2.07a.994.994 0 00.48.84c.24.15 2.13 1.29 2.88 1.62l.93 2.25c-.27.75-.81 2.82-.9 3.18a.978.978 0 00.27.93l1.47 1.47a.978.978 0 00.93.27c.27-.06 2.4-.6 3.18-.9l2.25.93c.33.72 1.44 2.58 1.62 2.88a1.007 1.007 0 00.87.48h2.07a.994.994 0 00.84-.48c.15-.24 1.29-2.13 1.62-2.88l2.25-.93c.75.27 2.82.81 3.18.9a.978.978 0 00.93-.27l1.47-1.47a.978.978 0 00.27-.93c-.06-.27-.6-2.4-.9-3.18l.93-2.25c.72-.33 2.58-1.44 2.88-1.62a1.007 1.007 0 00.48-.87v-2.07a1.1 1.1 0 00-.51-.81zm-14.52 8.43A6.54 6.54 0 1121.51 15a6.555 6.555 0 01-6.54 6.54z"
        fill={fill}
      />
    </Svg>
  );
}

export default SvgSettings;
