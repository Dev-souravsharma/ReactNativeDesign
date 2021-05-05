import {StyleSheet} from 'react-native';
const inputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: '#eaeaea',
    paddingStart: 10,
    borderRadius: 5,
    width: '100%',
  },
  iconStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 10,
  },
  texInput: {
    width: '73%',
    color: '#212121',
  },
  forgotStyle: {
    color: '#FF6E40',
    alignSelf: 'center',
  },
});
export default inputStyle;
