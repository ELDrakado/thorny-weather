import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather
  } = weatherData;

  const weatherCondition = weatherType[weather[0]?.main];

  return (
    <SafeAreaView
      style={[wrapper, { backgroundColor: weatherCondition.backgroundColor }]}
    >
      <View style={container}>
        <Feather name={weatherCondition?.icon} size={100} color='black' />
        <Text style={tempStyle}>{`${Math.round(temp)}° C`}</Text>
        <Text style={feels}>Feels like {`${Math.round(feels_like)}° C`}</Text>
        <RowText
          firstText={`High: ${Math.round(temp_max)}° C `}
          secondText={`Low: ${Math.round(temp_min)}° C`}
          wrapperStyle={highLowWrapper}
          firstTextStyle={highLow}
          secondTextStyle={highLow}
        />
      </View>
      <RowText
        firstText={weather[0].main}
        secondText={weatherCondition?.message}
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
    flex: 1
  },
  tempStyle: {
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
  description: { fontSize: 43 },
  message: { fontSize: 25 }
});

export default CurrentWeather;
