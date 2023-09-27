import { Text, View } from 'react-native';

const RowText = ({
  firstText,
  secondText,
  wrapperStyle,
  firstTextStyle,
  secondTextStyle
}) => {
  return (
    <View style={wrapperStyle}>
      <Text style={firstTextStyle}>{firstText}</Text>
      <Text style={secondTextStyle}>{secondText}</Text>
    </View>
  );
};

export default RowText;
