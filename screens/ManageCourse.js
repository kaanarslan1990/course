import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";

export default function ManageCourse({ route, navigation }) {
  const courseContext = useContext(CoursesContext);

  const courseId = route.params?.courseId;

  let isEditing = false;
  if (courseId) {
    isEditing = true;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Course" : "Add Course",
    });
  }, [navigation, isEditing]);

  function deleteCourse() {
    courseContext.deleteCourse(courseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  function addOrUpdateHandler(courseData) {
    if (isEditing) {
      courseContext.updateCourse(courseId, courseData);
      navigation.goBack();
    } else {
      courseContext.addCourse(courseData);
      navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <CourseForm buttonLabel={isEditing ? "Update" : "Add"} 
      cancelHandler={cancelHandler} 
      onSubmit={addOrUpdateHandler}/>
      

      {isEditing && (
        <View style={styles.deleteContainer}>
          <EvilIcons
            name="trash"
            size={36}
            color="black"
            onPress={deleteCourse}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "blue",
    paddingTop: 10,
    marginTop: 16,
  },
  
});
