import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface LessonContentProps{
    lessonMarkdown: string;
}

const LessonContent: FC<LessonContentProps> = (props: LessonContentProps) => {
    return(
        <View>
            <Markdown>
                {props.lessonMarkdown}
            </Markdown>
        </View>
    )
}

export default LessonContent