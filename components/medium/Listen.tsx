import { forwardRef } from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = forwardRef((props, ref) => (
  <Svg
    ref={ref}
    width={24}
    height={24}
    viewBox="0 0 512 512"
    fill="none"
    aria-label="home"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80"
    />
    <path
      d="M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </Svg>
));

export default SvgComponent;
