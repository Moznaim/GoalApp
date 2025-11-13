import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function ClearButton({ onClear }) {
  return (
    <View style={styles.container}>
      <Button title="Clear All Goals" color="#BF211E" onPress={onClear} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
});

export default ClearButton;
