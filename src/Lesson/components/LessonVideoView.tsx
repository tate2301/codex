import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const uri = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
export default class VideoView extends Component {
    onFullScreen = fullScreen => {
      console.log("fullscreen ", fullScreen);
    };
    render() {
      return (
        <View style={{  }}>
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