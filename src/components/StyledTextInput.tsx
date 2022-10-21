import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  heightPercentageToDP as dh,
  widthPercentageToDP as dw,
} from '../utils/responsive';

type StyledTextInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

const StyledTextInput = ({
  containerStyle,
  ...inputProps
}: StyledTextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={{flex: 1}} {...inputProps} />
    </View>
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    borderColor: '#c3c3c3',
    borderWidth: 1,
    width: dw(90),
    height: dh(6),
    padding: 2,
  },
});
