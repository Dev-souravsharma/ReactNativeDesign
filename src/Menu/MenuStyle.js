import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    padding: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    flex: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    elevation: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    flex: 3,
    padding: 10,
  },
  price: {
    marginTop: 10,
    flex: 1,
  },
  priceText: {
    fontWeight: 'bold',
    color: 'orange',
  },
  subTitle: {
    color: '#616161',
  },
});
