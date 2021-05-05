import React, {Component} from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import inputStyle from './inputStyle';
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: 1,
    };
  }
  onTextChanged = data => {
    this.props.onTextChange(data);
  };
  onFocus = () => {
    this.setState({elevation: 15});
  };
  onBlur = () => {
    this.setState({elevation: 1});
  };
  render() {
    return (
      <View style={[inputStyle.container, {elevation: this.state.elevation}]}>
        <Image source={this.props.iconPath} style={inputStyle.iconStyle} />
        <TextInput
          style={inputStyle.texInput}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          onChangeText={this.onTextChanged}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Text style={inputStyle.forgotStyle}>{this.props.forgot}</Text>
      </View>
    );
  }
}
export default Input;
