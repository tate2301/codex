import React from 'react';
import { StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

const LessonSharedViewTricksAndMistakesSection = ({tricks}) => {
    
    return(
        <View>
            <Markdown>
                {tricks}
            </Markdown>
        </View>
    )
}

const styles= StyleSheet.create({
    
})
export default LessonSharedViewTricksAndMistakesSection