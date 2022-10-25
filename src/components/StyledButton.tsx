import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  heightPercentageToDP as dh,
  widthPercentageToDP as dw,
} from '../utils/responsive';

export interface CustomTextInputI extends TextInputProps {}

type StyledButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  content: string;
  textColor?: string;
} & TouchableOpacityProps;

const StyledButton = ({
  containerStyle,
  content,
  textColor = '#fff',
  ...props
}: StyledButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      <Text style={[styles.text, {color: textColor}]}>{content}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    width: dw(90),
    height: dh(6),
    borderRadius: 6,
    backgroundColor: '#0095f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: dh(1.8),
  },
});
