import React, {Component} from 'react';
import {Image, View} from 'react-native';
import CustomButton from '../common/Button/Button';
import FooterText from '../common/FooterText/FooterText';
import Input from '../common/input/input';
import HeaderText from '../common/text/HeaderText';
import LoginStyle from './LoginStyle';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  email = text => {
    this.setState({email: text}, () => {
      console.log('Email ' + this.state.email);
    });
  };
  password = text => {
    this.setState({password: text});
    console.log(this.state.password);
  };
  render() {
    return (
      <View style={LoginStyle.container}>
        <Image
          source={require('../assets/gradient.png')}
          style={LoginStyle.imageStyle}
        />
        <HeaderText title="Login" subTitle="Please sign in to continue" />
        <View style={LoginStyle.topMargin}>
          <Input
            placeholderTextColor="#626262"
            onTextChange={this.email}
            placeholder="Email"
            iconPath={require('../assets/mail.png')}
          />
        </View>
        <View style={LoginStyle.topMargin}>
          <Input
            placeholderTextColor="#626262"
            onTextChange={this.password}
            placeholder="Password"
            forgot="Forgot"
            iconPath={require('../assets/padlock.png')}
          />
        </View>
        <View>
          <CustomButton title="Login" onClick="Menu" />
          <View style={LoginStyle.footer}>
            <FooterText
              title="Don't have an account?"
              register="Register"
              name="Sign up"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
