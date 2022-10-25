import React, {FC} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {Post} from '../../../../types';
import {
  heightPercentageToDP as dh,
  widthPercentageToDP as dw,
} from '../../../utils/responsive';
import Dots from './components/Dots';

interface IFooterProps {
  post: Post;
  scrollX: Animated.Value;
}

const Footer: FC<IFooterProps> = ({post, scrollX}) => {
  const media = post.media;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{uri: 'https://img.icons8.com/windows/84/like--v1.png'}}
          resizeMode={'center'}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://img.icons8.com/windows/84/speech-bubble--v1.png',
          }}
          resizeMode={'center'}
        />
        <Image
          style={styles.image}
          source={{uri: 'https://img.icons8.com/ios/84/sent.png'}}
          resizeMode={'center'}
        />
      </View>
      {media.length > 1 ? (
        <Dots scrollX={scrollX} media={media} />
      ) : (
        <View style={{flex: 2}} />
      )}
      <View style={styles.rightContainer}>
        <Image
          style={[styles.image, {marginRight: dw(1)}]}
          source={{
            uri: 'https://img.icons8.com/windows/344/bookmark-ribbon--v1.png',
          }}
          resizeMode={'center'}
        />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: dh(5.5),
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    width: dh(5),
    height: dh(5),
  },
});
