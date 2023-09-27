import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={({ item }) => (
            <ListItem
              dt_txt={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
              condition={item.weather[0].main}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
        />
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
  }
});

export default UpcomingWeather;
