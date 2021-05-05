import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FooterTextStyle from './FooterTextStyle';
import {useNavigation} from '@react-navigation/native';

const FooterText = props => {
  const navigation = useNavigation();
  return (
    <View style={FooterTextStyle.container}>
      <Text style={FooterTextStyle.title}>{props.title}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate(props.register);
        }}>
        <Text style={FooterTextStyle.buttonText}>{props.name}</Text>
      </Pressable>
    </View>
  );
};
export default FooterText;
