import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses'

export default function RecentCourses() {
  return (
    <Courses coursesPeriod="Last Week" />
  )
}

const styles = StyleSheet.create({})