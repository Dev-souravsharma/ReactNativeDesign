import {StyleSheet} from 'react-native';
export const ButtonStyle = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'orange',
    padding: 15,
    flexDirection: 'row',
    borderRadius: 25,
    width: '35%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowStyle: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
  },
  buttonAlignment: {
    alignItems: 'flex-end',
  },
});
