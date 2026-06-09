import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import WorkoutCard from '../components/WorkoutCard';
import { useTheme } from '../context/ThemeContext';
import { useUser, WorkoutLevel } from '../context/UserContext';
import AdBanner from '../components/AdBanner';
import { useResponsive } from '../utils/responsive';
import { getAllWorkouts, getRecommendedWorkouts } from '../data/workouts';

const levelOptions: WorkoutLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export default function WorkoutGalleryScreen() {
  const { theme } = useTheme();
  const { workoutLevel, setWorkoutLevel, goal } = useUser();
  const { scale, font } = useResponsive();

  const recommended = getRecommendedWorkouts(goal, workoutLevel);
  const allWorkouts = getAllWorkouts(workoutLevel);
  const recommendedTitles = new Set(recommended.map((item) => item.title));
  const moreWorkouts = allWorkouts.filter((item) => !recommendedTitles.has(item.title));

  return (
    <ScreenLayout title="3D Workout Gallery">
      <Text style={{ color: theme.secondary, marginBottom: scale(12), fontSize: font(14) }}>
        Choose your workout level and goal to receive recommended 3D exercise videos.
      </Text>

      <View style={{ flexDirection: 'row', marginBottom: scale(18), gap: scale(10) }}>
        {levelOptions.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => void setWorkoutLevel(option)}
            accessibilityRole="button"
            accessibilityLabel={`Select ${option} level`}
            style={{
              paddingVertical: scale(10),
              paddingHorizontal: scale(12),
              borderRadius: Math.max(10, scale(14)),
              backgroundColor: workoutLevel === option ? theme.accent : theme.card,
            }}
          >
            <Text
              style={{
                color: workoutLevel === option ? '#fff' : theme.text,
                fontWeight: '700',
                fontSize: font(13),
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text
        style={{
          color: theme.text,
          fontSize: font(18),
          fontWeight: '800',
          marginBottom: scale(12),
        }}
      >
        Recommended for {goal}
      </Text>

      {recommended.map((workout) => (
        <WorkoutCard
          key={`recommended-${workout.title}`}
          title={workout.title}
          sets={workout.sets}
          videoUri={workout.videoUri}
          description={workout.description}
          showFullscreen
        />
      ))}

      <Text
        style={{
          color: theme.text,
          fontSize: font(18),
          fontWeight: '800',
          marginBottom: scale(12),
          marginTop: scale(16),
        }}
      >
        All videos for {workoutLevel}
      </Text>

      {moreWorkouts.map((workout) => (
        <WorkoutCard
          key={`all-${workout.title}`}
          title={workout.title}
          sets={workout.sets}
          videoUri={workout.videoUri}
          description={workout.description}
          showFullscreen
        />
      ))}
      <AdBanner />
    </ScreenLayout>
  );
}
