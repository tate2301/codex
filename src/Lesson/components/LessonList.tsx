import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components';
import Text from '../../components/Text';
import { spec } from '../data/card-theme';
import data from "../data/lesson"
import LessonListCard from './LessonListCard';


const LessonList = () => {
    return (
        <View style={{padding: 16}}>
            {
                data.map(lesson => <LessonListCard key={lesson.key} title={lesson.title} notes={lesson.notes} />)
            }
        </View>
    )
}

export default LessonList