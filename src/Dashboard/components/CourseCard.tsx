import React, {FC, ReactNode, useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Text from '../../components/Text'

export interface ICourse {
    id: number
    title: string
    tagline: string
    color: string
    tags: Array<TagProps>
}

export interface TagProps {
    label: string
    color: string
}

const CourseCard: FC = ({course, navigation}: any) => {
    const navigateToLesson = () => {
        console.log({action: 'Navigating to Lesson', id: course.id})
        navigation.navigate('LessonList', {course})
    }

    const navigateToExercise = () => {
        console.log({action: 'Navigating to Exercise', id: course.id})
        navigation.navigate('Practice', {course})
    }

    return (
        <View style={[styles.container, tailwind('rounded-lg border-2 border-gray-100 my-4 bg-white p-4')]}>
            <View>
                <Text style={tailwind('font-medium')}>{course.title}</Text>
            </View>
            <View style={styles.tags}>
                {course.tags.map(tag => <Tag label={tag.label} color={tag.color} />)}
            </View>
            <View>
                <TouchableOpacity onPress={navigateToLesson} style={tailwind('px-2 py-2 my-1 rounded border border-gray-100 justify-center')}>
                    <Text style={[tailwind('font-medium text-gray-600 font-medium'), styles.button]}>Lesson review</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToExercise} style={tailwind('px-2 py-2 my-1 rounded border border-gray-100 justify-center')}>
                    <Text style={[tailwind('font-medium text-gray-600 font-medium'), styles.button]}>Start practice</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Tag = ({label, color}: TagProps) => (
    <View style={tailwind(`bg-${color}-100 my-1 mx-2 py-1 px-2 rounded-full`)}>
        <Text style={[tailwind(`text-${color}-600`), {fontSize: 12}]}>
            {label}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    header: {
        paddingVertical: 2
    },
    tags: {
        paddingVertical: 6,
        flexDirection: "row",
        flexWrap: "wrap",
        fontSize: 12, 
    },
    button: {
        fontSize: 14
    }
})

export default CourseCard