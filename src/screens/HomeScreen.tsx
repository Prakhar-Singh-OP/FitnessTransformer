import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { RootStackParamList } from '../navigation/types';
import Card from '../components/Card';
import ScreenLayout from '../components/ScreenLayout';

type HomeNavigationProps = {
  openDrawer?: () => void;
  navigate: (screen: keyof RootStackParamList) => void;
};

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProps>();
  const { theme } = useTheme();

  return (
    <ScreenLayout title="Dashboard">
      <TouchableOpacity
        onPress={() => navigation.openDrawer?.()}
        style={{
          alignSelf: 'flex-end',
          backgroundColor: theme.card,
          padding: 12,
          borderRadius: 16,
          marginBottom: 24,
        }}
      >
        <Text style={{ color: theme.text, fontWeight: '700' }}>Profile</Text>
      </TouchableOpacity>

      <Card title="BMI Calculator" onPress={() => navigation.navigate('BMI')} />
      <Card title="Calories Calculator" onPress={() => navigation.navigate('Calories')} />
      <Card title="Protein Calculator" onPress={() => navigation.navigate('Protein')} />
      <Card title="Diet Planner" onPress={() => navigation.navigate('Diet')} />
      <Card title="Home Workout Planner" onPress={() => navigation.navigate('HomeWorkout')} />
      <Card title="Gym Workout Planner" onPress={() => navigation.navigate('GymWorkout')} />

      <View
        style={{
          backgroundColor: theme.card,
          marginTop: 20,
          borderRadius: 24,
          padding: 20,
        }}
      >
        <Text style={{ color: theme.text, fontSize: 20, fontWeight: '800' }}>Weekly Progress</Text>
        <Text style={{ color: theme.secondary, marginTop: 12 }}>
          Keep moving and hit your goals with personalized workouts and diet plans.
        </Text>
      </View>
    </ScreenLayout>
  );
}
