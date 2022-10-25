import React, {FC, useContext, useRef} from 'react';
import {FlatList, RefreshControl, View, ViewToken} from 'react-native';
import {Post} from '../../types';
import PostContext from '../context/InstagramContext';
import {posts} from '../posts/posts';
import PostCard from './Post';

interface IFeedProps {}

const Feed: FC<IFeedProps> = () => {
  const {setVisiblePost} = useContext(PostContext);

  const onViewableItemsChanged = useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      const visibleItems = info.changed.filter(entry => entry.isViewable);
      visibleItems.forEach(visible => {
        setVisiblePost(visible.index);
      });
    },
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 75,
    waitForInteraction: true,
    minimumViewTime: 200,
  });

  const renderitem = ({item, index}: {item: Post; index: number}) => (
    <PostCard post={item} index={index} />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={renderitem}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment={'start'}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        initialNumToRender={3}
        maxToRenderPerBatch={2}
        updateCellsBatchingPeriod={3000}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => null} />
        }
      />
    </View>
  );
};

export default Feed;
