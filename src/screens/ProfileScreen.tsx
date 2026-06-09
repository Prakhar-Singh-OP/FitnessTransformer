import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useUser, WorkoutGoal, WorkoutLevel } from '../context/UserContext';
import { useResponsive } from '../utils/responsive';

const workoutLevels: WorkoutLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
const workoutGoals: WorkoutGoal[] = ['Weight Gain', 'Weight Loss', 'Strength', 'Endurance', 'Flexibility'];

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { workoutLevel, setWorkoutLevel, goal, setGoal } = useUser();
  const { scale, font } = useResponsive();

  return (
    <ScreenLayout title="Profile">
      <View
        style={{
          backgroundColor: theme.card,
          borderRadius: Math.max(12, scale(18)),
          padding: scale(16),
          marginBottom: scale(14),
        }}
      >
        <Text style={{ color: theme.text, fontSize: font(20), fontWeight: '900' }}>
          Prakhar Anand
        </Text>
        <Text style={{ color: theme.secondary, marginTop: scale(6) }}>Fitness Enthusiast</Text>

        <View style={{ marginTop: scale(18) }}>
          <Text
            style={{
              color: theme.text,
              fontWeight: '700',
              marginBottom: scale(10),
              fontSize: font(14),
            }}
          >
            Workout Level
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: scale(8) }}>
            {workoutLevels.map((level) => (
              <TouchableOpacity
                key={level}
                onPress={() => void setWorkoutLevel(level)}
                accessibilityRole="button"
                accessibilityLabel={`Set workout level to ${level}`}
                style={{
                  paddingVertical: scale(10),
                  paddingHorizontal: scale(12),
                  borderRadius: Math.max(10, scale(12)),
                  backgroundColor: workoutLevel === level ? theme.accent : theme.background,
                  borderWidth: workoutLevel === level ? 0 : 1,
                  borderColor: theme.border,
                }}
              >
                <Text
                  style={{
                    color: workoutLevel === level ? '#fff' : theme.text,
                    fontWeight: '700',
                    fontSize: font(13),
                  }}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ marginTop: scale(16) }}>
          <Text
            style={{
              color: theme.text,
              fontWeight: '700',
              marginBottom: scale(10),
              fontSize: font(14),
            }}
          >
            Fitness Goal
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: scale(8) }}>
            {workoutGoals.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => void setGoal(item)}
                accessibilityRole="button"
                accessibilityLabel={`Set fitness goal to ${item}`}
                style={{
                  paddingVertical: scale(10),
                  paddingHorizontal: scale(12),
                  borderRadius: Math.max(10, scale(12)),
                  backgroundColor: goal === item ? theme.accent : theme.background,
                  borderWidth: goal === item ? 0 : 1,
                  borderColor: theme.border,
                  minWidth: 120,
                }}
              >
                <Text
                  style={{
                    color: goal === item ? '#fff' : theme.text,
                    fontWeight: '700',
                    fontSize: font(12),
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <ThemeToggle />
    </ScreenLayout>
  );
}
