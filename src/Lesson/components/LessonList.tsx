import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import data from "../data/lesson"
import LessonListCard from './LessonListCard';
import {Dimensions} from 'react-native'
import { SharedElement } from "react-navigation-shared-element";


const LessonList = ({ navigation, route }) => {
    console.log(route.params?.course)
    return (
            <SharedElement id={route.params?.id}>
                <ScrollView>
                    <View style={{padding: 16}}>
                        {
                            data.map(lesson => <LessonListCard navigation={navigation} key={lesson.key} title={lesson.title} notes={lesson.notes} />)
                        }
                    </View>
                    
                </ScrollView>
    
            </SharedElement>
        )
}

export default LessonList