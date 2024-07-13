import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function CourseForm() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Course Info</Text>
      <View style={styles.priceAndDate}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: () => {},
          }}
          style={styles.flexAll}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeHolder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.flexAll}
        />
      </View>
      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  priceAndDate: {
    flexDirection: "row",
  },
  flexAll: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    marginVertical:20
  },
});
