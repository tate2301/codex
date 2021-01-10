import React, {FC, ReactNode, useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Text from '../../components/Text'

export interface ICourse {
    id: number
    title: string
    tagline: string
    color: string
}

const CourseCard: FC = ({course, navigation}: any) => {
    const navigateToLesson = () => {
        console.log({action: 'Navigating to Lesson', id: course.id})
        navigation.navigate('Lesson', {course})
    }

    const navigateToExercise = () => {
        console.log({action: 'Navigating to Exercise', id: course.id})
        navigation.navigate('Practice', {course})
    }

    return (
        <View style={[tailwind('rounded-lg border-2 border-gray-100 my-4 bg-white')]}>
            <View style={[tailwind('p-3 bg-'+course.color+'-600'), {borderTopRightRadius: 4, borderTopLeftRadius: 4}]}>
                <Text style={[tailwind('text-white')]}>COURSE</Text>
                <Text style={[tailwind('py-1 text-2xl text-white')]}>{course.title}</Text>
            </View>
            <View style={[tailwind('p-4')]}>
                <Text>
                    {course.tagline}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={navigateToLesson} style={[tailwind('p-4 border-t border-gray-100')]}>
                    <Text>REVIEW</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToExercise} style={[tailwind('p-4 border-t border-gray-100')]}>
                    <Text>PRACTICE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CourseCard