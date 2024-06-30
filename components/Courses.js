import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseSummary from "./CourseSummary";
import CourseList from "./CourseList";


export default function Courses({coursesPeriod}) {
  return (
    <View style={styles.container}>
      <CourseSummary courses={COURSES} periodName={coursesPeriod} />
      <CourseList courses={COURSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:25,
    paddingTop:25,

  }
});
