import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";

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
  function addOrUpdateHandler() {
    if (isEditing) {
      courseContext.updateCourse(courseId, {
        description: "Updated Course",
        amount: 169,
        date: new Date(),
      });
      navigation.goBack();
    } else {
      courseContext.addCourse({
        description: "Added Course",
        amount: 169,
        date: new Date(),
      });
      navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.save}>
            <Text style={styles.saveText}>{isEditing ? "Update" : "Add"}</Text>
          </View>
        </Pressable>
      </View>

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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "red",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "white",
  },
  save: {
    backgroundColor: "blue",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  saveText: {
    color: "white",
  },
});
