import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    if (enteredGoal.trim().length === 0) return;
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <View style={styles.inputContainer}>  
      <TextInput
        placeholder="Enter your goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} color="#E9CE2C" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    padding: 8,
    width: '70%',
    marginRight: 10,
    fontSize: 16,
  },
});

export default GoalInput;
