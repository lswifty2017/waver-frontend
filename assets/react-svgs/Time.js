import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgTime(props) {
  const { width = 31, height = 31, fill = "#fff" } = props;

  return (
    <Svg width={width} height={height} {...props}>
      <Defs></Defs>
      <Path
        fill={fill}
        className="time_svg__a"
        d="M15.476.5A14.961 14.961 0 00.5 15.475a1.4 1.4 0 002.793 0 12.1 12.1 0 112.986 8.089l.578-.433a1.211 1.211 0 00.482-1.107 1.244 1.244 0 00-.722-.963l-4.095-1.734a1.176 1.176 0 00-1.348.289 1.065 1.065 0 00-.289.915l.53 4.43a1.241 1.241 0 001.2 1.059 1.433 1.433 0 00.722-.241l.77-.578a14.814 14.814 0 0011.413 5.248A14.975 14.975 0 1015.476.5z"
      />
      <Path
        fill={fill}
        className="time_svg__a"
        d="M23.273 11.526a.757.757 0 00-.09-.224 1.113 1.113 0 00-.986-.583 1.193 1.193 0 00-.538.134l-5.646 2.778a1.244 1.244 0 00-.807 0l-3.854-1.434a1.113 1.113 0 00-.941 2.017l3.5 1.7a1.743 1.743 0 001.613 1.12.965.965 0 00.493-.09 1.874 1.874 0 001.12-.986l5.512-3.137a1.118 1.118 0 00.624-1.295zm-7.393 4.75a.568.568 0 01-.269.045.969.969 0 01-.941-.672.979.979 0 011.882-.538.97.97 0 01-.672 1.165z"
      />
    </Svg>
  );
}

export default SvgTime;
