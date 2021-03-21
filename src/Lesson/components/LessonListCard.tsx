import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Text from '../../components/Text';
import { spec } from '../data/card-theme';

const LessonListCard = ({title, notes, navigation}) => {
    return (
        <View style={{marginVertical: 4}}>
                            <View style={styles.container}>
                                <Text style={tailwind("text-xl font-bold py-2")}>
                                    {notes} Flashcards
                                </Text>
                                <Text style={tailwind("pb-6")}>
                                    In order to master the art of programming, lessons must be delivered in bit sized pieces. Flashcards help 
                                    you to focus on learning one thing at a time
                                </Text>
                                <TouchableOpacity onPress={() => navigation.push("Lesson")} style={tailwind("px-8 py-4 bg-blue-500 text-white rounded flex justify-center")}>
                                    <Text style={[tailwind("text-white text-center")]}>
                                        Revise now
                                    </Text>
                                </TouchableOpacity>
                            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: spec.SMALL_RADIUS,
        padding: spec.SPACING,
        marginVertical: spec.SPACING / 2
    },
    title: {
        fontSize: 14,
        fontWeight: "600"
    },
    tagline: {
        fontSize: 12,
        paddingTop: 4
    }
})

export default LessonListCard