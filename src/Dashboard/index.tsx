import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Animated } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
import Text from '../components/Text';
import CourseCard, { ICourse, TagProps } from './components/CourseCard';

const Home: React.FC = props => {
    
    const courses = new Array<ICourse>(
        {
            id: 1,
            title: 'Live Chat in Vue.js',
            tagline: 'Building live chat with Vue.js and WebSocket',
            caption: 'Vue JS Chat apps',
            color: 'purple',
            poster: 'https://cdn.dribbble.com/users/241205/screenshots/3865871/emailsubs.jpg?compress=1&resize=800x600',
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
        {
            id: 2,
            title: 'Arrays of Pairs',
            caption: 'Functions? Aha!',
            tagline: 'Functions and Scope',
            color: 'purple',
            poster: 'https://cdn.dribbble.com/users/241205/screenshots/5409400/drib_quizzing_4x.png?compress=1&resize=800x600',
            tags: new Array<TagProps>(
                {
                    label: "EASY",
                    color: "blue"
                },
                {
                    label: "FACEBOOK",
                    color: "red"
                }
            )
        },
    )

    const scrollY = useRef(new Animated.Value(0)).current

    return (
        <View>
            <ScrollView style={styles.scrollView}>
                    <View style={tailwind('rounded-lg bg-white p-4 my-4')}>
                        <Text style={tailwind('text-xs text-gray-500')}>MY COURSES</Text>
                        <Text style={tailwind('text-xl font-bold text-gray-800')}>Learn something new today</Text>
                        <View style={tailwind('py-2')}>
                            {courses.map((course) => <MyCourseItem navigation={props.navigation} key={course.id} title={course.title} caption={course.caption} id={course.id} /> )}
                        </View>
                    </View>

                    <Animated.FlatList
                        data={courses}
                        onScroll={Animated.event(
                            [{nativeEvent: { contentOffset: { y: scrollY } } }]
                        )}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {
                            return(
                                <CourseCard key={index} course={item} navigation={props.navigation} />
                            )
                        }}/>

            </ScrollView>
        </View>
    )
}


const MyCourseItem = ({title, id, caption, navigation}) => {
    return (
        <View style={[{flexDirection: 'row', justifyContent: 'space-between'},tailwind('py-2')]}>
            <View style={[{flexDirection: 'row', flex: 1.5}]}>
                <View style={tailwind('w-12')}>

                </View>
                <View>
                    <Text style={tailwind('text-sm font-bold text-gray-800')}>{title}</Text>
                    <Text style={tailwind('text-xs text-gray-600')}>
                        {caption}
                    </Text>
                </View>
            </View>
            <View style={{flex:1, alignSelf: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.push('LessonList', {id})} style={tailwind('py-1 px-2 bg-gray-200 rounded-full')}>
                    <Text style={tailwind('text-xs font-bold text-gray-800')}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
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