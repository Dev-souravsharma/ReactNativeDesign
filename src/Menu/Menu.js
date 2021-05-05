import React, {Component} from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import {style} from './MenuStyle';
const data = [
  {
    id: 1,
    name: 'Mexicon Special Food',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    image: require('../assets/burger.jpg'),
  },
  {
    id: 2,
    name: 'Italian Pizza',
    title: 'Curabitur et lacus tempor, molestie tellus eu, pharetra enim.',
    image: require('../assets/italianpizza.jpg'),
  },
  {
    id: 3,
    name: 'Leaf Green Thailand',
    title: 'Sed vitae velit luctus felis dignissim elementum eget',
    image: require('../assets/leafgreenthialand.jpg'),
  },
  {
    id: 4,
    name: 'SandWich&Drinks',
    title: 'Duis vitae tellus rhoncus, vulputate nisi et, interdum massa.',
    image: require('../assets/burger.jpg'),
  },
  {
    id: 5,
    name: 'Veg. Burger',
    title: 'Aenean interdum est in dui varius, vitae pharetra purus fermentum.',
    image: require('../assets/burger.jpg'),
  },
  {
    id: 6,
    name: 'Momo',
    title: 'Aenean interdum est in dui varius, vitae pharetra purus fermentum.',
    image: require('../assets/burger.jpg'),
  },
  {
    id: 7,
    name: 'Samosa',
    title: 'Aenean interdum est in dui varius, vitae pharetra purus fermentum.',
    image: require('../assets/burger.jpg'),
  },
];
class Menu extends Component {
  render() {
    return (
      <View style={style.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={style.card}>
              <Image source={item.image} style={style.image} />
              <View style={style.list}>
                <Text style={style.header}>{item.name}</Text>
                <Text style={style.subTitle}>{item.title}</Text>
              </View>
              <View style={style.price}>
                <Text style={style.priceText}>$7.00</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Menu;
