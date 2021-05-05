import React from 'react';
import {Text, View} from 'react-native';
import {HeaderTextStyle} from './HeaderTextStyle';
const HeaderText = props => {
  return (
    <View>
      <Text style={HeaderTextStyle.heading}>{props.title}</Text>
      <Text style={HeaderTextStyle.subtitle}>{props.subTitle}</Text>
    </View>
  );
};
export default HeaderText;
