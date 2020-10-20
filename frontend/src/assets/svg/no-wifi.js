import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} viewBox="0 0 768 768" {...props}>
    <Path fill={props.fill || '#000'} d="M520.992 382.688c25.248 12.32 47.936 27.424 66.048 43.104 13.376 11.552 33.568 10.112 45.152-3.264s10.112-33.568-3.264-45.152c-22.496-19.488-49.888-37.6-79.872-52.256-15.872-7.744-35.040-1.152-42.784 14.72s-1.152 35.040 14.72 42.784zM345.28 193.504c128.576-10.368 249.376 30.912 342.144 106.656 4.736 3.872 9.376 7.808 13.952 11.84 13.248 11.68 33.472 10.4 45.152-2.848s10.4-33.472-2.848-45.152c-5.184-4.576-10.464-9.024-15.808-13.408-105.056-85.76-242.048-132.64-387.776-120.896-17.568 1.44-30.688 16.864-29.28 34.464s16.864 30.752 34.464 29.312zM291.488 541.6c31.68-22.528 68.672-31.84 104.768-28.992 28.512 2.24 56.48 12.096 80.736 29.088 7.456 5.216 16.384 6.816 24.64 5.184l211.744 211.744c12.512 12.512 32.768 12.512 45.248 0s12.512-32.768 0-45.248l-408-408c-1.6-2.016-3.392-3.84-5.408-5.408l-290.592-290.592c-12.512-12.512-32.768-12.512-45.248 0s-12.512 32.768 0 45.248l130.816 130.816c-40.224 20.128-79.68 46.496-115.936 78.56-13.248 11.712-14.496 31.936-2.784 45.184s31.936 14.496 45.184 2.784c38.112-33.696 79.968-60.064 121.664-78.432l74.336 74.336c-43.456 14.624-85.472 37.664-123.168 69.152-13.568 11.328-15.36 31.52-4.032 45.088s31.52 15.36 45.088 4.032c40.64-33.984 87.168-56 134.016-66.368l89.248 89.248c-0.832-0.064-1.664-0.16-2.496-0.224-50.56-4-102.528 9.12-146.848 40.608-14.4 10.24-17.792 30.208-7.552 44.608s30.208 17.792 44.608 7.552zM416 640c0-17.664-14.336-32-32-32s-32 14.336-32 32 14.336 32 32 32 32-14.336 32-32z" />
  </Svg>
);

export default SvgComponent;
