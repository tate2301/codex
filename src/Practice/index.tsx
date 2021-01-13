import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import SliderApp from './CodingReview/SliderApp';
import CodeElement from './components/CodeElement';
import PracticeHeader from './components/Header';


const Practice: FC = ({navigation}: any) => {
    return(
        <View style={styles.container}>
            <SliderApp />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    }
})

export default Practice