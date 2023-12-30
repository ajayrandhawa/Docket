// AddTask.tsx

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDeadline(date);
    hideDatePicker();
  };

  const handleAddTask = () => {
    // Add your logic for adding the task with taskName and deadline
    console.log('Task Name:', taskName);
    console.log('Deadline:', deadline);
    // You can add your logic to save the task here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
        <Text style={styles.datePickerButtonText}>Select Deadline</Text>
      </TouchableOpacity>
      <Text style={styles.selectedDate}>{deadline.toLocaleString()}</Text>

      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  datePickerButton: {
    backgroundColor: '#4285f4',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  datePickerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  selectedDate: {
    fontSize: 18,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#34a853',
    padding: 12,
    borderRadius: 4,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddTask;
