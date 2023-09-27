import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const {
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={image}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <IconText
          iconName='user'
          iconSize={50}
          iconColor='red'
          text={`Population: ${population}`}
          wrapperStyle={[rowLayout, populationWrapper]}
          textStyle={populationText}
        />
        <View style={[rowLayout, riseSetWrapper]}>
          <IconText
            iconName='sunrise'
            iconSize={50}
            iconColor='white'
            text={moment(sunrise).format('h:mm a')}
            wrapperStyle={[rowLayout, riseSetWrapper]}
            textStyle={riseSetText}
          />
          <IconText
            iconName='sunset'
            iconSize={50}
            iconColor='white'
            text={moment(sunset).format('h:mm a')}
            wrapperStyle={[rowLayout, riseSetWrapper]}
            textStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default City;
