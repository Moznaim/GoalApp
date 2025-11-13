import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import GoalCount from './components/GoalCount';   
import ClearButton from './components/Clearbutton'; 

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    if (goalText.trim().length === 0) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {       
        key: Math.random().toString(), 
        text: goalText,  
      },
    ]);
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  function clearGoalsHandler() {
    setCourseGoals([]);
  }
  return (
    <View style={styles.container}>
      {/* Banner image at the top */}
      <Image source={require('./assets/transparent.png')} style={styles.banner} />

      <Text style={styles.title}>My Goal List</Text>

      <GoalInput onAddGoal={addGoalHandler} />
      <GoalCount count={courseGoals.length} />
      {courseGoals.length > 0 && <ClearButton onClear={clearGoalsHandler} />}

      <View style={styles.goalListContainer}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}  // ensures full height
          style={{ flex: 1 }}                      // makes FlatList fill container
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              onDelete={() => removeGoalHandler(item.key)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69A197',  // 👈 light blue background
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  banner: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  goalListContainer: {
    height: 300,
    width: '90%',
    borderWidth: 2,
    borderColor: 'gold',
  }
});
