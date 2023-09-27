import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({
  iconName,
  iconSize,
  iconColor,
  text,
  wrapperStyle,
  textStyle
}) => {
  return (
    <View style={wrapperStyle}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default IconText;
