import React from 'react';
import { Text, StyleSheet } from 'react-native';

function GoalCount({ count }) {
  return (
    <Text style={styles.counter}>
      Total Goals: {count}
    </Text>
  );
}

const styles = StyleSheet.create({
  counter: {
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default GoalCount;
