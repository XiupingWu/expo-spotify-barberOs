import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgTabMenu({ active, size }) {
  const fill = active ? colors.white : colors.greyInactive;
  // Hamburger menu icon: three horizontal lines
  // Same path for both active and inactive (different color only)
  const dPath = 'M 100 185 H 412 V 215 H 100 Z M 100 255 H 412 V 285 H 100 Z M 100 325 H 412 V 355 H 100 Z';

  return (
    <Svg height={size} width={size} viewBox="0 0 512 512">
      <Path d={dPath} fill={fill} />
    </Svg>
  );
}

SvgTabMenu.defaultProps = {
  active: false,
  size: 24
};

SvgTabMenu.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgTabMenu;
