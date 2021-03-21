import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Video from 'react-native-video';

const uri = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
export default class VideoView extends Component {
    onFullScreen = fullScreen => {
      console.log("fullscreen ", fullScreen);
    };
    render() {
      return (
        <View style={{  }}>
            <Video source={{uri}}   // Can be a URL or a local file.
                                // Store reference
                rate={1.0}                              // 0 is paused, 1 is normal.
                volume={1.0}                            // 0 is muted, 1 is normal.
                muted={false}                           // Mutes the audio entirely.
                paused={false}                          // Pauses playback entirely.
                resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                repeat={true}                           // Repeat forever.
                playInBackground={false}                // Audio continues to play when app entering background.
                playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                progressUpdateInterval={250.0}
                />

            <View style={{paddingHorizontal: 16}}>
                <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                aspernatur rerum, deserunt cumque ipsam unde nam voluptatum tenetur
                cupiditate veritatis autem quidem ad repudiandae sapiente odit
                voluptates fugit placeat ut!
                </Text>
          </View>
        </View>
      );
    }
  }


const style= StyleSheet.create({
    container: {
        flex: 2
    },
    backgroundVideo: {
        flex: 1,
      },
})