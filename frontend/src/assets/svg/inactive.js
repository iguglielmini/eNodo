import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 64, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M38.0301 22.3924L38.0301 42.2574C38.0302 42.5208 38.1348 42.7734 38.3211 42.9596C38.5073 43.1459 38.7599 43.2505 39.0233 43.2506L44.642 43.2506C47.3662 43.2471 49.991 42.227 52.0026 40.39C54.0142 38.553 55.2677 36.0314 55.5178 33.3187L62.903 33.318C63.0348 33.3203 63.1658 33.2963 63.2883 33.2474C63.4108 33.1985 63.5224 33.1258 63.6164 33.0333C63.7105 32.9409 63.7852 32.8306 63.8362 32.709C63.8872 32.5874 63.9135 32.4568 63.9135 32.3249C63.9135 32.193 63.8872 32.0624 63.8362 31.9408C63.7852 31.8192 63.7105 31.7089 63.6164 31.6165C63.5224 31.524 63.4108 31.4512 63.2883 31.4024C63.1658 31.3535 63.0348 31.3295 62.9029 31.3318L55.5178 31.3311C55.2699 28.6176 54.017 26.0946 52.0049 24.2572C49.9929 22.4197 47.3668 21.4004 44.642 21.3992L39.0233 21.3992C38.7599 21.3993 38.5073 21.5039 38.3211 21.6902C38.1348 21.8764 38.0302 22.129 38.0301 22.3924Z" fill="#AFB0B3" />
    <Path d="M44.2305 21.3994H42.244V43.2512H44.2305V21.3994Z" fill="#E9E9E9" />
    <Path d="M55.5198 33.3179L62.9029 33.3179C63.0348 33.3202 63.1658 33.2962 63.2883 33.2474C63.4108 33.1985 63.5223 33.1257 63.6164 33.0332C63.7104 32.9408 63.7851 32.8305 63.8361 32.7089C63.8871 32.5873 63.9134 32.4567 63.9134 32.3248C63.9134 32.1929 63.8871 32.0624 63.8361 31.9407C63.7851 31.8191 63.7104 31.7089 63.6164 31.6164C63.5223 31.524 63.4108 31.4512 63.2883 31.4023C63.1658 31.3534 63.0348 31.3294 62.9029 31.3317L55.5198 31.3317C55.5802 31.9924 55.5803 32.6572 55.5198 33.3179Z" fill="#AFB0B3" />
    <Path d="M25.9699 42.2574L25.9698 22.3924C25.9698 22.129 25.8652 21.8764 25.6789 21.6902C25.4927 21.5039 25.2401 21.3993 24.9767 21.3992L19.358 21.3992C16.6338 21.4027 14.009 22.4228 11.9974 24.2598C9.98584 26.0968 8.73229 28.6184 8.48219 31.3311L1.09705 31.3318C0.965183 31.3295 0.834175 31.3535 0.711677 31.4024C0.58918 31.4512 0.477644 31.524 0.383577 31.6165C0.289511 31.7089 0.214795 31.8192 0.163795 31.9408C0.112794 32.0624 0.086526 32.193 0.0865263 32.3249C0.0865266 32.4568 0.112794 32.5874 0.163796 32.709C0.214797 32.8306 0.289511 32.9409 0.383577 33.0333C0.477644 33.1258 0.589179 33.1986 0.711677 33.2474C0.834174 33.2963 0.965181 33.3203 1.09705 33.318L8.48219 33.3187C8.7301 36.0322 9.98299 38.5552 11.9951 40.3926C14.0071 42.2301 16.6332 43.2494 19.358 43.2506L24.9767 43.2506C25.2401 43.2505 25.4927 43.1459 25.6789 42.9596C25.8652 42.7734 25.9698 42.5208 25.9699 42.2574Z" fill="#E9E9E9" />
    <Path d="M21.7561 21.3989H19.7695V43.2507H21.7561V21.3989Z" fill="#AFB0B3" />
    <Path d="M8.48015 31.3317L1.09712 31.3317C0.965247 31.3294 0.834241 31.3534 0.711743 31.4023C0.589245 31.4512 0.47771 31.524 0.383642 31.6164C0.289576 31.7089 0.214861 31.8191 0.16386 31.9407C0.112859 32.0624 0.0865919 32.1929 0.0865918 32.3248C0.0865921 32.4567 0.112859 32.5873 0.16386 32.7089C0.214862 32.8305 0.289575 32.9408 0.383642 33.0332C0.47771 33.1257 0.589244 33.1985 0.711742 33.2474C0.83424 33.2962 0.965246 33.3202 1.09712 33.3179L8.48015 33.3179C8.41975 32.6572 8.41975 31.9924 8.48015 31.3317Z" fill="#AFB0B3" />
    <Path d="M25.9695 26.6204L25.9695 29.5505L29.8422 29.5505C30.2374 29.5506 30.6164 29.3937 30.8959 29.1144C31.1754 28.835 31.3325 28.456 31.3326 28.0609C31.3327 27.6657 31.1758 27.2866 30.8964 27.0071C30.6171 26.7277 30.2381 26.5706 29.8429 26.5705L26.0046 26.5712L25.9695 26.6204Z" fill="#AFB0B3" />
    <Path d="M29.8423 37.9787C30.2375 37.9788 30.6165 37.8219 30.896 37.5426C31.1755 37.2632 31.3326 36.8842 31.3327 36.4891C31.3328 36.0939 31.1759 35.7149 30.8965 35.4354C30.6172 35.1559 30.2382 34.9988 29.843 34.9987L25.9675 35.0015L25.9675 37.9808L29.8423 37.9787Z" fill="#AFB0B3" />
  </Svg>
);

export default SvgComponent;
