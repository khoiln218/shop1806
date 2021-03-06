/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class ToolBar extends Component {
  gotoHome() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    const { wrapper, row1, left, iconStyle, titleStyle } = styles;
    const { title } = this.props;
    return (
        <View style={wrapper}>
            <View style={row1}>
              <View style={left}>
                <TouchableOpacity onPress={this.props.onOpen}>
                  <Image source={icMenu} style={iconStyle} />
                </TouchableOpacity>
                <Text style={titleStyle}>{title}</Text>
              </View>
              <TouchableOpacity onPress={this.gotoHome.bind(this)}>
                <Image source={icLogo} style={iconStyle} />
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      height: height / 15,
      backgroundColor: '#E11933',
      padding: 10,
      justifyContent: 'space-around'
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleStyle: {
      color: '#FFF',
      fontSize: 12,
      marginLeft: 10
    },
    iconStyle: {
      width: 20,
      height: 20
    }
});
