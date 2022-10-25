import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, memo, useContext, useEffect} from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {Post, RootStackParamList} from '../../types';
import InstagramContext from '../context/InstagramContext';
import {posts} from '../posts/posts';
import {heightPercentageToDP, widthPercentageToDP} from '../utils/responsive';
import StyledTextInput from './StyledTextInput';

interface ISearchBarProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignedIn'>;
}

const SearchBar: FC<ISearchBarProps> = ({navigation}) => {
  const {setList} = useContext(InstagramContext);

  function handleFocus() {
    navigation.navigate('Search');
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboard);
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, []);

  function handleKeyboard() {
    navigation.navigate('Search');
  }

  async function searchPost(text: string) {
    let filteredList = await searchData(text, posts);
    setList(filteredList);
  }
  const searchData = (text: string, data: Post[]) => {
    if (text) {
      const newData = data.filter((item: Post) => {
        const itemData = item.category.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      return newData;
    } else {
      return posts;
    }
  };

  return (
    <StyledTextInput
      containerStyle={styles.search}
      placeholder="Ara"
      // onFocus={handleFocus}
      onChangeText={text => searchPost(text)}
    />
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  search: {
    width: widthPercentageToDP(73),
    height: heightPercentageToDP(5.5),
    borderWidth: 0,
    alignSelf: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 12,
    backgroundColor: '#e3e3e3',
  },
});
