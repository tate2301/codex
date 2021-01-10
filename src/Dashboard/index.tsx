import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CourseCard, { ICourse, TagProps } from './components/CourseCard';

const Home: React.FC = props => {
    
    const courses = new Array<ICourse>(
        {
            id: 1,
            title: '1. Hello World',
            tagline: 'Calling a Function and Scope of Code.',
            color: 'purple',
            tags: new Array<TagProps>(
                {
                    label: "EASY",
                    color: "blue"
                },
                {
                    label: "HASH TABLE",
                    color: "yellow"
                },
                {
                    label: "GOOGLE",
                    color: "red"
                },
                {
                    label: "FACEBOOK",
                    color: "red"
                }
            )
        },
    )

    return (
        <View>
            <ScrollView style={styles.scrollView}>
                    {
                        //@ts-ignore
                        courses.map((course, key) => (<CourseCard course={course} navigation={props.navigation} />))
                    }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 12,
        paddingHorizontal: 8
    }
})

export default Home