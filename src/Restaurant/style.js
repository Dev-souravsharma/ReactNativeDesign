import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  hlcontainer: {
    paddingLeft: 16,
  },
  iconCard: {
    padding: 24,
    margin: 10,
    height: 100,
    marginTop: 16,
    elevation: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageCard: {
    backgroundColor: '#fff',
    margin: 16,
  },
  iconStyle: {
    width: 18,
    height: 18,
  },
  imageStyle: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 24,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  title: {
    color: '#626262',
  },
  otherInfo: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
  },
  status: {
    color: 'orange',
  },
  distance: {
    paddingLeft: 10,
    color: '#9E9E9E',
    fontSize: 12,
  },
  rating: {
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  ratingDir: {
    alignSelf: 'flex-end',
    padding: 24,
    paddingTop: 130,
    position: 'absolute',
  },
});
