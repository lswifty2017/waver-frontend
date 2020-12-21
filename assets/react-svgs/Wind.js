import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgWind(props) {
  return (
    <Svg width={31.402} height={20.924} {...props}>
      <Defs></Defs>
      <Path
        className="wind_svg__a"
        d="M.656 10.465h21.593a5.233 5.233 0 10-5.233-5.233.656.656 0 001.313 0v-.025a3.926 3.926 0 113.926 3.951H.662a.657.657 0 00-.656.656.647.647 0 00.65.651zM18.974 14.391H.656a.653.653 0 100 1.307h18.318a1.963 1.963 0 11-1.963 1.988v-.031a.656.656 0 00-1.313 0 3.27 3.27 0 103.276-3.264z"
      />
      <Path
        className="wind_svg__a"
        d="M27.482 11.772H.656a.656.656 0 100 1.313h26.826a2.616 2.616 0 11-2.619 2.632v-.018a.656.656 0 10-1.313 0 3.926 3.926 0 103.932-3.926z"
      />
    </Svg>
  );
}

export default SvgWind;
