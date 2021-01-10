import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Text from '../../components/Text';

const QuestionSection: FC = () => {
    return (
        <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
            <Text style={tailwind("text-2xl py-1")}>1. Hello World</Text>
            <Text style={tailwind("text-gray-600")}>
                This is an introductory question. You are required to re-order the code blocks
                such that the output of the code is "Hello World". When done press submit to run 
                the code
            </Text>

            <View style={styles.submitButtonContainer}>
                <TouchableOpacity style={ 
                    [{
                        paddingVertical: 8, 
                        height: 40, 
                        alignItems: 'center', 
                        justifyContent: 'center',
                    }, tailwind("rounded-full bg-gray-800")]
                }>
                    <Text style={tailwind("text-white px-4")}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

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