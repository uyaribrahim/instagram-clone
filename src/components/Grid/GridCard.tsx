import React, {FC, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import Video from 'react-native-video';
import {Post} from '../../../types';
import {widthPercentageToDP as dw} from '../../utils/responsive';

interface IGridCardProps {
  item: Post;
}

const GridCard: FC<IGridCardProps> = ({item}) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  return (
    <View style={{padding: dw(0.5), alignSelf: 'center'}}>
      <View style={{width: dw(48), height: dw(34), backgroundColor: '#e3e3e3'}}>
        {item.type == 'image' ? (
          <Image
            style={{
              width: '100%',
              height: '100%',
              margin: dw(0.2),
            }}
            source={{uri: item.media[0].uri}}
            resizeMode="cover"
            // blurRadius={4}
          />
        ) : (
          <View>
            <Video
              style={{width: '100%', height: '100%'}}
              source={{uri: item.media[0].uri}}
              resizeMode="cover"
              repeat={true}
              muted={true}
              playInBackground={true}
              onLoad={() => setVideoLoaded(true)}
              onLoadStart={() => setVideoLoaded(false)}
            />
            <ActivityIndicator
              size={dw(5)}
              animating={!videoLoaded}
              color="black"
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
        )}
      </View>
    </View>
  );
};

export default GridCard;
