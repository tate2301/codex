import React from 'react';
import { StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const LessonSharedViewTopSection = ({description}) => {
    
    return(
        <View>  
            <Markdown>{description}</Markdown>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default LessonSharedViewTopSection