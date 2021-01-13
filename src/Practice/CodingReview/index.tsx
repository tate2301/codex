import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
const { width } = Dimensions.get('screen');


const SliderApp = () => {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});

export default SliderApp