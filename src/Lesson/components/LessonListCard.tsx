import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import Text from '../../components/Text';
import { spec } from './card-theme';

const LessonListCard = ({title, notes}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={[styles.tagline, tailwind("text-gray-600")]}>
                {notes} NOTES
            </Text>
        </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: "bold"
    },
    tagline: {
        fontSize: 14,
        paddingTop: 8
    }
})

export default LessonListCard