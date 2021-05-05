import React, {Component} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {style} from './style';

const data = [
  {
    id: 1,
    name: 'Restaurant',
    image: require('../assets/dish.png'),
  },
  {
    id: 2,
    name: 'Coffee & Tea',
    image: require('../assets/coffee.png'),
  },
  {
    id: 3,
    name: 'Club & Bar',
    image: require('../assets/pub.png'),
  },
];
const data2 = [
  {
    id: 1,
    name: 'The Alpha',
    image: require('../assets/restro.jpeg'),
    distance: '400m from you',
    state: 'Gujarat',
    Rating: '9.0',
    title: 'Restaurant',
    status: 'open now',
  },
  {
    id: 2,
    name: 'The Alpha',
    image: require('../assets/restro.jpeg'),
    distance: '400m from you',
    state: 'Gujarat',
    Rating: '9.0',
    title: 'Restaurant',
    status: 'open now',
  },
  {
    id: 3,
    name: 'The Alpha',
    image: require('../assets/restro.jpeg'),
    distance: '400m from you',
    state: 'Gujarat',
    Rating: '9.0',
    title: 'Restaurant',
    status: 'open now',
  },
  {
    id: 4,
    name: 'The Alpha',
    image: require('../assets/restro.jpeg'),
    distance: '400m from you',
    state: 'Gujarat',
    Rating: '9.0',
    title: 'Restaurant',
    status: 'open now',
  },
  {
    id: 5,
    name: 'The Alpha',
    image: require('../assets/restro.jpeg'),
    distance: '400m from you',
    state: 'Gujarat',
    Rating: '9.0',
    title: 'Restaurant',
    status: 'open now',
  },
];
class Restaurant extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.hlcontainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={true}
            renderItem={({item}) => (
              <View style={style.iconCard}>
                <Image source={item.image} style={style.iconStyle} />
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View>
          <FlatList
            data={data2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={style.imageCard}>
                <Image source={item.image} style={style.imageStyle} />
                <View style={style.ratingDir}>
                  <Text style={style.rating}>{item.Rating}</Text>
                </View>
                <View style={style.info}>
                  <Text style={style.heading}>{item.name}</Text>
                  <Text style={style.title}>{item.title}</Text>
                </View>
                <View style={style.otherInfo}>
                  <Text style={style.status}>{item.status}</Text>
                  <Text style={style.distance}>{item.distance}</Text>
                  <Text style={style.distance}>{item.state}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
export default Restaurant;
