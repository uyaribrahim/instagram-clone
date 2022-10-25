import React, {FC, useContext} from 'react';
import {FlatList, View} from 'react-native';
import {Post} from '../../types';
import InstagramContext from '../context/InstagramContext';
import GridCard from './Grid/GridCard';

interface IGridProps {}

const Grid: FC<IGridProps> = () => {
  const {list} = useContext(InstagramContext);
  const renderGridItem = ({item, index}: {item: Post; index: number}) => (
    <GridCard item={item} />
  );

  return (
    <View style={{flex: 1, alignSelf: 'center'}}>
      <FlatList
        data={list}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment={'start'}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        numColumns={2}
      />
    </View>
  );
};

export default Grid;
