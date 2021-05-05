import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {ButtonStyle} from './ButtonStyle';
import {useNavigation} from '@react-navigation/native';
const CustomButton = props => {
  const navigation = useNavigation();
  return (
    <View style={ButtonStyle.buttonAlignment}>
      <Pressable
        style={ButtonStyle.buttonBackground}
        onPress={() => {
          navigation.navigate(props.onClick);
        }}>
        <Text style={ButtonStyle.buttonTitle}>{props.title}</Text>
        <Image
          source={require('../../assets/arrow.png')}
          style={ButtonStyle.arrowStyle}
        />
      </Pressable>
    </View>
  );
};
export default CustomButton;
