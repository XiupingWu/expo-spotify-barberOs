import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { colors, device, gStyle } from '../constants';

// components
import TouchIcon from './TouchIcon';
import SvgTabMenu from '../icons/Svg.TabMenu';

function DrawerHeader({ title }) {
  const navigation = useNavigation();

  return (
    <BlurView tint="dark" intensity={95} style={styles.container}>
      <View style={styles.left}>
        <TouchIcon
            icon={<SvgTabMenu active={false} />}
            onPress={navigation.toggleDrawer}
        />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={gStyle.flex1} />
    </BlurView>
  );
}

DrawerHeader.defaultProps = {
  title: 'Menu'
};

DrawerHeader.propTypes = {
  // optional
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: device.iPhoneNotch ? 48 : 24
  },
  containerText: {
    ...gStyle.flex5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...gStyle.textSpotifyBold16,
    color: colors.white,
    textAlign: 'center'
  },
  left: {
    ...gStyle.flex1,
    alignItems: 'flex-start'
  }
});

export default DrawerHeader;