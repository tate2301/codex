import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import DragEditor from '../../editor';
import tailwind from "tailwind-rn"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../../components/Text';
import { data } from '../../data';

const CodeElement: FC = ({id}:any ) => {

    const d = 0
    return(
        <View style={[styles.container, tailwind("bg-gray-700")]}>
            <DragEditor tiles={data.exercises[d].tiles} finalKeys={data.exercises[d].finalKeys} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flex: 2.5,
        height: '100%'
    }
})

export default CodeElement