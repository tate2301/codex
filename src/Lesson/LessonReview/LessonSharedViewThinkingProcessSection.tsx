import React from 'react';
import { StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const LessonSharedViewThinkingProcessSection = ({thinkingprocess}) => {
    
    return(
        <View>
            <Markdown>
                {thinkingprocess}
            </Markdown>
        </View>
    )
}

const styles= StyleSheet.create({

})

export default LessonSharedViewThinkingProcessSection