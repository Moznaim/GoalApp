import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    goalItem: {
      padding: 12,
      marginVertical: 8,
      backgroundColor: '#F9DC5C',
      borderRadius: 10,
      width: '100%',        // still full width
    },
    goalText: {
      color: 'black',
      fontSize: 16,
      flexWrap: 'wrap',     // allow wrapping
    },
});

export default GoalItem;
