import React, {useRef, useState} from 'react';
import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as dw} from '../../../../utils/responsive';

const ImageCard = ({
  uri,
  thumbnail,
}: {
  uri: string;
  thumbnail?: number | undefined;
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const thumbnailAnimated = useRef(new Animated.Value(0)).current;
  const imageAnimated = useRef(new Animated.Value(0)).current;

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    setImageLoaded(true);
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View
      style={{
        width: dw(100),
        height: dw(100),
        backgroundColor: '#e3e3e3',
      }}>
      <Animated.Image
        style={[
          styles.thumbnail,
          {
            opacity: thumbnailAnimated,
          },
        ]}
        source={thumbnail}
        onLoad={handleThumbnailLoad}
        resizeMode="cover"
        blurRadius={7}
      />
      <Animated.Image
        style={[
          styles.image,
          {
            opacity: imageAnimated,
          },
        ]}
        source={{uri: uri}}
        resizeMode="cover"
        onLoad={onImageLoad}
      />
      <ActivityIndicator
        size={dw(13)}
        animating={!imageLoaded}
        color="#c3c3c3"
        style={{
          position: 'absolute',
          opacity: 0.2,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  thumbnail: {
    width: dw(100),
    height: dw(100),
  },
  image: {
    width: dw(100),
    height: dw(100),
    position: 'absolute',
  },
});
