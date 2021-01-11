import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import FlashCardList from './components/FlashCardsList';

const Lesson: FC = ({props}: any) => {
    return(
        <View>
            <FlashCardList />
        </View>
    )
} 

const styles = StyleSheet.create({

})

export default Lesson