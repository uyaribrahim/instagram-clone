import React, {FC, useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {Media, Post} from '../../../../types';
import Footer from '../Footer';
import ImageCard from './components/ImageCard';
import VideoCard from './components/VideoCard';

interface IBodyProps {
  post: Post;
  index?: number;
}

const Body: FC<IBodyProps> = ({post, index}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderImage = ({item}: {item: Media}) => {
    return <ImageCard uri={item.uri} thumbnail={item.thumbnail} />;
  };

  return (
    <View style={{flex: 1}}>
      {post.type == 'image' ? (
        <FlatList
          data={post.media}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
          decelerationRate={'fast'}
          pagingEnabled={true}
          horizontal
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
      ) : (
        <VideoCard uri={post.media[0].uri} index={index} />
      )}
      <Footer post={post} scrollX={scrollX} />
    </View>
  );
};

export default Body;
