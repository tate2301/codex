import React, {FC, ReactNode, useEffect, useState} from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Text from '../../components/Text'
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get('screen');
const ITEM_HEIGHT = width * 0.76 * 1.7;

export interface ICourse {
    id: number
    title: string
    tagline: string
    caption: string
    color: string
    poster: string
    tags: Array<TagProps>
}

export interface TagProps {
    label: string
    color: string
}

const CourseCard: FC = ({course, navigation}: any) => {
    const navigateToLesson = () => {
        console.log({action: 'Navigating to Lesson', id: course.id})
        navigation.navigate('LessonList', { id: course.id, title: course.title, caption: course.caption, tagline: course.tagline })
    }

    const inputRange = [

    ]

    return (
            <TouchableOpacity onPress={navigateToLesson}>
                <SharedElement id={`course-${course.id}`}>
                    <View style={[styles.container, {position: 'relative'}, tailwind('rounded-lg border-2 border-gray-100 my-4 bg-white')]}>
                        <View style={{
                            zIndex: 6, 
                            height: ITEM_HEIGHT, 
                            borderRadius: 8, 
                            padding: 20,
                            paddingTop: 32,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            backgroundColor: '#00000099',
                            justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={tailwind('text-white')}>
                                        {course.caption}
                                    </Text>
                                    <Text style={tailwind('text-3xl font-bold text-white')}>
                                        {course.title}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={tailwind('text-sm text-gray-300')}>
                                        {course.tagline}
                                    </Text>
                                </View>
                        </View>

                        <Image 
                            source={{uri: course.poster}} 
                            style={{
                                height: ITEM_HEIGHT,
                                width: '100%',
                                borderRadius: 8,
                                top: 0,
                                left: 0,
                            }} 
                            />
                    </View>
            
                </SharedElement>
            </TouchableOpacity>
        )
}

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