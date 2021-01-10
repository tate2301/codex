import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import DragEditor from '../../editor';
import tailwind from "tailwind-rn"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../../components/Text';

const CodeElement: FC = () => {

    return(
        <View style={[styles.container, tailwind("bg-gray-200")]}>
            <DragEditor />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flex: 4,
        height: '100%'
    }
})

export default CodeElement