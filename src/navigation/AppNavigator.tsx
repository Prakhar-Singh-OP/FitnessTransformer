import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BMIScreen from '../screens/BMIScreen';
import CaloriesScreen from '../screens/CaloriesScreen';
import ProteinScreen from '../screens/ProteinScreen';
import DietScreen from '../screens/DietScreen';
import HomeWorkoutScreen from '../screens/HomeWorkoutScreen';
import GymWorkoutScreen from '../screens/GymWorkoutScreen';
import WorkoutGalleryScreen from '../screens/WorkoutGalleryScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#0f172a',
        },
        drawerActiveTintColor: '#38bdf8',
        drawerInactiveTintColor: '#cbd5e1',
      }}
    >
      <Drawer.Screen name="Dashboard" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="App" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={AppDrawer} />
      <Stack.Screen name="BMI" component={BMIScreen} />
      <Stack.Screen name="Calories" component={CaloriesScreen} />
      <Stack.Screen name="Protein" component={ProteinScreen} />
      <Stack.Screen name="Diet" component={DietScreen} />
      <Stack.Screen name="HomeWorkout" component={HomeWorkoutScreen} />
      <Stack.Screen name="GymWorkout" component={GymWorkoutScreen} />
      <Stack.Screen name="WorkoutGallery" component={WorkoutGalleryScreen} />
    </Stack.Navigator>
  );
}
