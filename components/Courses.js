import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseSummary from "./CourseSummary";
import CourseList from "./CourseList";

export default function Courses({ coursesPeriod, courses,nullText }) {
  let content= <Text style={styles.alert}>{nullText}</Text>

  if (courses.length > 0) {
    content = <CourseList courses={courses} />;
  } 
  return (
    <View style={styles.container}>
      <CourseSummary courses={courses} periodName={coursesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  alert:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:30,
    color:'red'
  }
});
