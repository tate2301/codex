import React from 'react';
import { Image, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../../components/Text';
import data from "../data/lesson"
import LessonListCard from './LessonListCard';
import {Dimensions} from 'react-native'
import { SharedElement } from "react-navigation-shared-element";
import tailwind from 'tailwind-rn';

const HEIGHT = Dimensions.get('window').height * 0.6


const LessonList = ({ navigation, route }) => {
    console.log(route.params?.course)
    return (
            <SharedElement id={route.params?.id}>
                <ScrollView>
                    <View style={{position: 'relative', height: HEIGHT}}>
                        <View style={{
                            position: 'absolute', 
                            bottom: 0, 
                            left: 0, 
                            elevation: 2, 
                            paddingTop: HEIGHT * 0.2,
                            paddingBottom: HEIGHT * 0.1,
                            paddingLeft: 16,
                            paddingRight: 16,
                            height: HEIGHT,
                            width: '100%',
                            backgroundColor: '#00000090', 
                            justifyContent: 'space-between'
                            }}>

                            <View>
                                <Text style={tailwind('text-white text-sm')}>
                                    {route.params?.caption}
                                </Text>
                                <Text style={tailwind('text-white text-2xl font-bold')}>
                                    {route.params?.title}
                                </Text>
                            </View>
                            <View>
                                <Text style={tailwind('text-gray-200 text-sm')}>
                                    {route.params?.tagline}
                                </Text>
                                <View>
                                    <TouchableOpacity style={tailwind('rounded py-2 bg-indigo-700 w-full my-2')}>
                                        <Text style={tailwind('text-white font-bold text-sm text-center')}>
                                            Get started
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> 
                        <View>
                            <Image
                                source={{uri: 'https://cdn.dribbble.com/users/241205/screenshots/5409400/drib_quizzing_4x.png?compress=1&resize=800x600'}} 
                                style={{width: '100%', height: HEIGHT, position: 'absolute'}}
                                />
                        </View>
                    </View>
                    
                    <View style={{padding: 16}}>
                        {
                            data.map(lesson => <LessonListCard navigation={navigation} key={lesson.key} title={lesson.title} notes={lesson.notes} />)
                        }
                    </View>
                    
                </ScrollView>
    
            </SharedElement>
        )
}

LessonList.sharedElements = ({route}) => {
    const id = route.params?.course.id // "pizza"
    return [`course-${id}`]
  }
export default LessonList