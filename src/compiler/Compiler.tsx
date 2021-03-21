import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { spec } from '../Lesson/data/card-theme'

// Show something on top of other
export default function Compiler() {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spec.SPACING
  }
})