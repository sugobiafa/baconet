import { forwardRef } from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = forwardRef((props, ref) => (
  <Svg ref={ref} viewBox="0, 0, 400, 269" {...props}>
    <G id="svgg">
      <Path
        id="path0"
        d="M359.350 7.727 C 312.606 22.997,282.927 46.170,282.927 67.397 C 282.927 76.265,284.018 78.326,287.921 76.828 C 290.668 75.774,306.542 73.954,323.197 72.783 C 358.452 70.305,364.228 74.123,364.228 99.911 C 364.228 116.549,368.928 117.829,381.569 104.633 C 393.375 92.311,396.549 79.892,398.959 36.585 L 400.995 0.000 391.554 0.145 C 386.362 0.226,371.870 3.637,359.350 7.727 M0.040 41.063 C 0.226 69.460,33.879 133.022,52.089 139.370 L 60.990 142.473 59.346 121.991 C 57.281 96.265,61.010 93.322,102.114 88.240 C 138.472 83.745,141.878 76.501,116.462 57.721 C 90.012 38.175,-0.064 25.287,0.040 41.063 M210.815 135.225 C 117.419 146.113,117.946 145.769,121.771 193.496 C 126.032 246.661,145.331 269.919,185.185 269.919 C 207.815 269.919,209.246 269.453,220.163 258.537 C 232.740 245.960,236.056 245.116,245.337 252.136 C 254.195 258.836,284.389 258.335,296.315 251.291 C 313.307 241.253,319.953 221.714,317.450 189.156 C 312.413 123.626,312.020 123.427,210.815 135.225 M270.698 176.423 C 280.601 184.055,279.241 200.481,268.293 205.470 C 255.100 211.481,243.902 204.596,243.902 190.475 C 243.902 174.582,258.426 166.965,270.698 176.423 M198.374 188.618 C 213.949 204.192,195.325 225.186,175.396 214.520 C 166.504 209.761,167.056 193.675,176.333 187.176 C 185.886 180.486,190.547 180.790,198.374 188.618 "
        stroke="none"
        fill="#000000"
        fillRule="evenodd"
      ></Path>
    </G>
  </Svg>
));

export default SvgComponent;
