import React from 'react';
import { StyleSheet, View } from 'react-native';
import LessonSharedViewExplanationSection from './LessonSharedViewExplanationSection';
import LessonSharedViewThinkingProcessSection from './LessonSharedViewThinkingProcessSection';
import LessonSharedViewTopSection from './LessonSharedViewTopSection';
import LessonSharedViewTricksAndMistakesSection from './LessonSharedViewTricksAndMistakesSection';

const LessonSharedViewContainer = ({lesson}) => {
    
    return(
        <View>  
            <View>
                <LessonSharedViewTopSection />
            </View>
            <View>
                <LessonSharedViewExplanationSection />
            </View>
            <View>
                <LessonSharedViewTricksAndMistakesSection />
            </View>
            <View>
                <LessonSharedViewThinkingProcessSection />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default LessonSharedViewContainer