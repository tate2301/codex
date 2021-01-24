import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

// Show something on top of other
export default function OverlayContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.behind}>
          <ActivityIndicator />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
})