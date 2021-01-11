import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import LessonContent from './Content';
import data from "../lesson_data"
import {spec} from "./card-theme"
import Text from '../../components/Text';
import Markdown from 'react-native-markdown-display';

const FlashCardList = () => {
    let scrollX = React.useRef(new Animated.Value(0)).current

    return (
        <View>
            <Animated.FlatList
                data={data}
                horizontal
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                snapToInterval={spec.SNAP_INTERVAL }
                keyExtractor={item => item.key}
                onScroll={Animated.event(
                    [{nativeEvent:{contentOffset: { x: scrollX}},}],
                    {useNativeDriver: true}
                )}
                renderItem={({item, index}) => {
                    const inputRange = [
                        (index -1) * spec.FULL_SIZE,
                        index * spec.FULL_SIZE,
                        ( index + 1 ) * spec.FULL_SIZE
                    ]

                    return (
                        <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>
                            <View style={[StyleSheet.absoluteFillObject, {padding: spec.SPACING + spec.SPACING}]}>
                                <Animated.View>
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <View style={{paddingVertical: 8}}>
                                        <Markdown>
                                            {item.text}
                                        </Markdown>
                                    </View>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            >

            </Animated.FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: spec.ITEM_WIDTH,
        height: spec.ITEM_HEIGHT,
        marginVertical: spec.SPACING,
        marginHorizontal: spec.SPACING ,
        backgroundColor: "white",
        padding: spec.SPACING,
        borderRadius: spec.RADIUS,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 21, 
        fontWeight: 'bold',
        textAlign: "center"
    }
})

export default FlashCardList