import React, {FC} from 'react';
import {View} from 'react-native';
import {Post} from '../../../types';
import {heightPercentageToDP as dh} from '../../utils/responsive';
import Body from './Body';
import Header from './Header';

export interface PostProps {
  post: Post;
  index?: number;
}

const PostCard: FC<PostProps> = ({post, index}) => {
  return (
    <View style={{marginBottom: dh(1.8)}}>
      <Header />
      <Body post={post} index={index} />
    </View>
  );
};

export default React.memo(PostCard);
