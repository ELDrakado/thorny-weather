import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = () => {
  const DATA = [
    {
      dt_txt: '2023-09-27 12:00:00',
      main: {
        temp_max: 28,
        temp_min: 26
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2023-09-27 15:00:00',
      main: {
        temp_max: 25,
        temp_min: 23
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: '2023-09-27 18:00:00',
      main: {
        temp_max: 21,
        temp_min: 19
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    }
  ];

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={DATA}
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
