import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CourseSummary({periodName}) {
  return (
    <View>
      <Text>{periodName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})