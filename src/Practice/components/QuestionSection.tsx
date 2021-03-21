import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import tailwind from 'tailwind-rn';
import Text from '../../components/Text';
import { data } from '../../data';

const QuestionSection: FC = () => {
    return (
        <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
            <Markdown style={tailwind('text-sm')}>
                {data.exercises[0].question}
            </Markdown>
        </View>
    )
}

const styles = StyleSheet.create({
    submitButtonContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        paddingVertical: 4
    }
})

export default QuestionSection