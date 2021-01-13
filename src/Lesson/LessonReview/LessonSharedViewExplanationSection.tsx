import React from 'react';
import { StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const LessonSharedViewExplanationSection = ({explanation}) => {
    
    return(
        <View>
            <Markdown>
                {explanation}
            </Markdown>
        </View>
    )
}

const styles= StyleSheet.create({
    
})

export default LessonSharedViewExplanationSection