import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name='sun' size={100} color='yellow' />
        <Text style={temp}>20</Text>
        <Text style={feels}>Feels like 21</Text>
        <RowText
          firstText='High: 25 '
          secondText='Low: 10'
          wrapperStyle={highLowWrapper}
          firstTextStyle={highLow}
          secondTextStyle={highLow}
        />
      </View>
      <RowText
        firstText="It's sunny"
        secondText="It's perfect t-shirt weather"
        wrapperStyle={bodyWrapper}
        firstTextStyle={description}
        secondTextStyle={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#1a93ab'
  },
  temp: {
    color: 'midnightblue',
    fontSize: 48
  },
  feels: {
    color: 'midnightblue',
    fontSize: 30
  },
  highLow: {
    color: 'midnightblue',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 }
});

export default CurrentWeather;
