import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { getFormattedDate } from "../helper/date";

export default function CourseForm({
  cancelHandler,
  onSubmit,
  buttonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });
  function addOrUpdateHandler() {
    const courseData = {
      amount: Number(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid =
      !isNaN(courseData.amount) && courseData.amount > 0;
    const dateIsValid = courseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = courseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value:Number(currentInputs.amount.value), isValid: amountIsValid },
          date: { value: currentInputs.amount.date, isValid: dateIsValid },
          description: { value: currentInputs.description.value, isValid: descriptionIsValid },
        };
      });

      return;
    }
    onSubmit(courseData);
  }

  function inputChange(inputIdentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: {value:enteredValue,isValid:true},
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Course Info</Text>
      <View style={styles.priceAndDate}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChange.bind(this, "amount"),
            value: inputs.amount.value.toString(),
          }}
          style={styles.flexAll}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeHolder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChange.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.flexAll}
        />
      </View>
      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChange.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {!inputs.amount.isValid && (
        <Text style={styles.alertText}>Please enter amount correctly!</Text>
      )}
      {!inputs.date.isValid && (
        <Text style={styles.alertText}>Please enter date correctly!</Text>
      )}
      {!inputs.description.isValid && (
        <Text style={styles.alertText}>Please enter description correctly!</Text>
      )}
      <View style={styles.buttons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View style={styles.save}>
            <Text style={styles.saveText}>{buttonLabel}</Text>
          </View>
        </Pressable>
      </View>
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
    marginVertical: 20,
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
  alertText: {
    color:'red',
    marginVertical:4
  }
});
