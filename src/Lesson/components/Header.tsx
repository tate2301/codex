import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text';


const Header: FC = ({props}: any) => {

    return (
        <View>
            <View>
                <Text>COURSE</Text>
                <Text>Lecture</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default Header