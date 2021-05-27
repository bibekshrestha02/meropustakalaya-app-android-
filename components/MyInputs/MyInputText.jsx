import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Color } from '../../utils/colors';
const MyInputText = (props) => {
  const {
    field: { name, onChange, value },
    form: { errors, touched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.text}>{props.label}</Text>}
      <TextInput
        style={[styles.textInput, hasError && styles.errorTextInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>* {errors[name]}</Text>}
    </View>
  );
};

export default MyInputText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 2,
    fontFamily: 'Gentium',
    fontSize: 18,
    color: Color.black,
    letterSpacing: 1,
    padding: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: Color.gray,
  },
  errorTextInput: {
    borderWidth: 1,
    borderColor: Color.red,
    color: Color.red,
  },
  errorText: {
    fontFamily: 'Gentium',
    fontSize: 16,
    color: Color.red,
    letterSpacing: 1,
    paddingVertical: 5,
  },
  text: {
    fontFamily: 'Gentium',
    fontSize: 20,
    color: Color.black,
    letterSpacing: 1,
    paddingVertical: 5,
  },
});
