import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import CustomButton from '../common/Button/Button';
import FooterText from '../common/FooterText/FooterText';
import Input from '../common/input/input';
import HeaderText from '../common/text/HeaderText';
import {Style} from './style';
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  fullName = text => {
    this.setState({fullName: text}, () => {
      console.log('fullName Register:' + this.state.fullName);
    });
  };
  email = text => {
    this.setState({email: text}, () => {
      console.log('Email Register:' + this.state.email);
    });
  };
  password = text => {
    this.setState({password: text});
    console.log('password Register:' + this.state.password);
  };
  confirmPassword = text => {
    this.setState({confirmPassword: text});
    console.log('CP Register:' + this.state.confirmPassword);
  };
  render() {
    return (
      <ScrollView style={Style.scrollViewContainer}>
        <View style={Style.container}>
          <Image
            source={require('../assets/gradient.png')}
            style={Style.image}
          />
          <HeaderText title="Create Account" />
          <View style={Style.inputMargin}>
            <Input
              placeholderTextColor="#626262"
              onTextChange={this.fullName}
              placeholder="Full Name"
              iconPath={require('../assets/user.png')}
            />
          </View>
          <View style={Style.inputMargin}>
            <Input
              placeholderTextColor="#626262"
              onTextChange={this.email}
              placeholder="Email"
              iconPath={require('../assets/mail.png')}
            />
          </View>
          <View style={Style.inputMargin}>
            <Input
              placeholderTextColor="#626262"
              onTextChange={this.password}
              placeholder="Password"
              iconPath={require('../assets/padlock.png')}
            />
          </View>
          <View style={Style.inputMargin}>
            <Input
              placeholderTextColor="#626262"
              onTextChange={this.confirmPassword}
              placeholder="Confirm Password"
              iconPath={require('../assets/padlock.png')}
            />
          </View>
          <CustomButton title="SignUp" onClick="Restaurant" />
          <View style={Style.footer}>
            <FooterText
              title="Already have an account?"
              register="Login"
              name="Sign in"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Registration;
