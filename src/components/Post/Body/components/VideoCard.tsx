import React, {useContext, useState} from 'react';
import {ActivityIndicator, TouchableNativeFeedback, View} from 'react-native';
import Video from 'react-native-video';
import PostContext from '../../../../context/InstagramContext';
import {widthPercentageToDP as dw} from '../../../../utils/responsive';

const VideoCard = ({uri, index}: {uri: string | undefined; index?: number}) => {
  const {visiblePost} = useContext(PostContext);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  const [muted, setMuted] = useState<boolean>(false);
  function handleClick() {
    setMuted(muted => !muted);
  }
  console.log('RENDER VIDEO');
  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View>
        <Video
          style={{
            width: dw(100),
            height: dw(100),
            backgroundColor: '#e3e3e3',
          }}
          source={{uri: uri}}
          resizeMode="cover"
          repeat={true}
          paused={visiblePost === index ? false : true}
          muted={muted}
          playInBackground={false}
          onLoad={() => setVideoLoaded(true)}
          onLoadStart={() => setVideoLoaded(false)}
          reportBandwidth={true}
        />

        <ActivityIndicator
          size={dw(13)}
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
    </TouchableNativeFeedback>
  );
};

export default VideoCard;
