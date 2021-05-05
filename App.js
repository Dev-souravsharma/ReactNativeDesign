import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Login from './src/Login/Login';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from './src/Registration/Registration';
import Menu from './src/Menu/Menu';
import Restaurant from './src/Restaurant/Restaurant';
class App extends Component {
  render() {
    const Stack = createStackNavigator();
    const StackLogin = createStackNavigator();
    function menu() {
      return (
        <StackLogin.Navigator>
          <StackLogin.Screen
            name="Menu"
            component={Menu}
            options={{
              headerTitleAlign: 'center',
              headerRight: props => <SearchTitle />,
            }}
          />
          {/* <StackLogin.Screen name="ForgotPassword" component={ScreenB} /> */}
        </StackLogin.Navigator>
      );
    }

    function restaurant() {
      return (
        <StackLogin.Navigator>
          <StackLogin.Screen
            name="Restaurant"
            component={Restaurant}
            options={{
              headerTitleAlign: 'center',
              headerRight: props => <ContactTop />,
              headerLeft: pros => <MenuIcon />,
            }}
          />
          {/* <StackLogin.Screen name="ForgotPassword" component={ScreenB} /> */}
        </StackLogin.Navigator>
      );
    }
    function LogoTitle() {
      return (
        <Image
          style={{width: 50, height: 50}}
          source={require('./src/assets/burger.jpg')}
        />
      );
    }
    function SearchTitle() {
      return (
        <Image
          style={{width: 20, height: 20, alignItems: 'center', marginRight: 20}}
          source={require('./src/assets/search.png')}
        />
      );
    }
    function ContactTop() {
      return (
        <Image
          style={{width: 20, height: 20, alignItems: 'center', marginRight: 20}}
          source={require('./src/assets/user.png')}
        />
      );
    }
    function MenuIcon() {
      return (
        <Image
          style={{width: 20, height: 20, alignItems: 'center', marginLeft: 20}}
          source={require('./src/assets/menu.png')}
        />
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Registration} />
          <Stack.Screen name="Menu" component={menu} />
          <Stack.Screen name="Restaurant" component={restaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
