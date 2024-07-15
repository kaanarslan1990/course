import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";
import { deleteCourseUrl, storeCourse, updateCourseUrl} from "../helper/http";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ManageCourse({ route, navigation }) {
  const [isSubmiting, setIsSubmiting] = useState(false)

  const courseContext = useContext(CoursesContext);

  const courseId = route.params?.courseId;

  let isEditing = false;
  const selectedCourse = courseContext.courses.find(
    (course) => course.id === courseId
  );

  if (courseId) {
    isEditing = true;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Course" : "Add Course",
    });
  }, [navigation, isEditing]);

  async function deleteCourse() {
    setIsSubmiting(true)
    courseContext.deleteCourse(courseId);
    await deleteCourseUrl(courseId)
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  async function addOrUpdateHandler(courseData) {
    setIsSubmiting(true)
    if (isEditing) {
      courseContext.updateCourse(courseId, courseData);
     await updateCourseUrl(courseId, courseData);
      navigation.goBack();
    } else {
      const id = await storeCourse(courseData);
      courseContext.addCourse({ ...courseData, id: id });
      navigation.goBack();
    }
  }
  if(isSubmiting){
    return <LoadingSpinner />
  }
  return (
    <View style={styles.container}>
      <CourseForm
        buttonLabel={isEditing ? "Update" : "Add"}
        cancelHandler={cancelHandler}
        onSubmit={addOrUpdateHandler}
        defaultValues={selectedCourse}
      />

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
