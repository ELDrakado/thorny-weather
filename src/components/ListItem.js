import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name='sun' size={50} color='yellow' />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'paleturquoise',
    opacity: 0.75
  },
  temp: {
    color: 'midnightblue',
    fontSize: 20
  },
  date: {
    color: 'midnightblue',
    fontSize: 15
  }
});

export default ListItem;
