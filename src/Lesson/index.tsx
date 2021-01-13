import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import LessonFlashCards from './components/FlashCardsList';
import data from "./data/lesson_data"

const Lesson: FC = ({props}: any) => {
    return(
        <View>
            <LessonFlashCards lessons={data} />
        </View>
    )
} 

const styles = StyleSheet.create({

})

export default Lesson