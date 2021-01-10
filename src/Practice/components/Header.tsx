import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import QuestionSection from './QuestionSection';

const PracticeHeader: FC = () => {
    return (
        <View style={styles.container}>
            <QuestionSection />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexGrow: 1,
        backgroundColor: "white"
    }
})

export default PracticeHeader