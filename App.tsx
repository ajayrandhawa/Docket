import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import AddTask from './src/AddTask';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddTask" component={AddTask} />
          </Stack.Navigator>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
