import React from 'react';
import {Animated, View} from 'react-native';
import {Media} from '../../../../../types';
import {
  heightPercentageToDP,
  widthPercentageToDP as dw,
} from '../../../../utils/responsive';

const Dots = ({scrollX, media}: {scrollX: Animated.Value; media: Media[]}) => {
  return (
    <View
      style={{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {media.map((item: Media, index: number) => {
        const inputRange = [
          dw(100) * index - 1,
          dw(100) * index,
          dw(100) * index + 1,
        ];
        const color = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: ['#c3c3c3', '#0095f6', '#c3c3c3'],
          extrapolate: 'clamp',
        });
        const size = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [
            heightPercentageToDP(0.6),
            heightPercentageToDP(0.65),
            heightPercentageToDP(0.6),
          ],
          extrapolate: 'clamp',
        });
        return (
          <View key={`animated-${index}`}>
            <Animated.View
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: 50,
                margin: 2,
              }}></Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default Dots;
