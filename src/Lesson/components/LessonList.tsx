import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components';
import Text from '../../components/Text';
import { spec } from './card-theme';
import data from "./lesson"
import LessonListCard from './LessonListCard';


const LessonList = () => {
    return (
        <View style={{padding: 16}}>
            <View style={{paddingVertical: 16}}>
                <TouchableOpacity style={{padding: spec.SPACING, borderRadius:spec.SMALL_RADIUS, backgroundColor: "#121212"}}>
                    <Text style={{color: "white", textAlign: "center"}}>CONTINUE TO PRACTICE</Text>
                </TouchableOpacity>
            </View>
            {
                data.map(lesson => <LessonListCard key={lesson.key} title={lesson.title} notes={lesson.notes} />)
            }
        </View>
    )
}

export default LessonList