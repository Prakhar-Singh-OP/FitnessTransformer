import React from 'react';
import ScreenLayout from '../components/ScreenLayout';
import WorkoutCard from '../components/WorkoutCard';
import { getHomeWorkouts } from '../data/workouts';
import { useUser } from '../context/UserContext';

export default function HomeWorkoutScreen() {
  const { workoutLevel } = useUser();
  const workouts = getHomeWorkouts(workoutLevel);

  return (
    <ScreenLayout title="Home Workout Planner">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.title}
          title={workout.title}
          sets={workout.sets}
          videoUri={workout.videoUri}
          description={workout.description}
        />
      ))}
    </ScreenLayout>
  );
}
