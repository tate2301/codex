import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CourseCard, { ICourse } from './components/CourseCard';

const Home: React.FC = props => {
    
    const courses = new Array<ICourse>(
        {
            id: 1,
            title: 'Learn Javascript',
            tagline: 'Calling a Function and Scope of Code.',
            color: 'purple'
        },
        {
            id: 2,
            title: 'Learn C',
            tagline: 'The basics of the language that powers everything.',
            color: 'red'
        },
        {
            id: 3,
            title: 'Learn C++',
            tagline: 'A powerfull object orientated language.',
            color: 'pink'
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