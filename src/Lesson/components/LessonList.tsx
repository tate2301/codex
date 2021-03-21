import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import data from "../data/lesson"
import LessonListCard from './LessonListCard';
import {Dimensions} from 'react-native'
import { SharedElement } from "react-navigation-shared-element";
import { spec } from '../data/card-theme';
import tailwind from 'tailwind-rn';
import Text from '../../components/Text';


const LessonList = ({ navigation, route }) => {
    console.log(route.params?.course)
    return (
            <SharedElement id={route.params?.id}>
                <ScrollView>
                    <View style={{paddingHorizontal: 16}}>
                        {
                            data.map(lesson => <LessonListCard navigation={navigation} key={lesson.key} title={lesson.title} notes={lesson.notes} />)
                        }
                    </View>

                    <View style={{marginHorizontal: 16, marginVertical: 4}}>
                            <View style={compilerStyles.container}>
                                <Text style={tailwind("text-xl font-bold py-2")}>
                                    Test your skills
                                </Text>
                                <Text style={tailwind("pb-6")}>
                                    Refine your programming skills and test your newly found knowledge through coding practise
                                </Text>
                                <TouchableOpacity onPress={() => navigation.push("Compiler")} style={tailwind("px-8 py-4 bg-gray-900 text-white rounded flex justify-center")}>
                                    <Text style={[tailwind("text-white text-center")]}>
                                        Launch Compiler
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    
                </ScrollView>
    
            </SharedElement>
        )
}

const videoStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: spec.SMALL_RADIUS,
        padding: spec.SPACING + 4,
        marginVertical: spec.SPACING / 2
    },
})

const compilerStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: spec.SMALL_RADIUS,
        padding: spec.SPACING + 4,
        marginVertical: spec.SPACING / 2
    },
})

export default LessonList