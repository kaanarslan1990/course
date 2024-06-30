import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function ManageCourse({ route, navigation }) {
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
  function deleteCourse(){
    navigation.goBack()
  }
  return (
    <View style ={styles.container}>
      {isEditing && (
        <View style ={styles.deleteContainer}>
          <EvilIcons name="trash" size={36} color="black" onPress={deleteCourse} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:25,

  },
  deleteContainer:{
    alignItems:'center',
    borderTopWidth:2,
    borderTopColor:'blue',
    paddingTop:10,
    marginTop:16,


  }
});
