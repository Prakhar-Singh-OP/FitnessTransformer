import React from 'react';
import ScreenLayout from '../components/ScreenLayout';
import WorkoutCard from '../components/WorkoutCard';
import { getGymWorkouts } from '../data/workouts';
import { useUser } from '../context/UserContext';

export default function GymWorkoutScreen() {
  const { workoutLevel } = useUser();
  const gymWorkouts = getGymWorkouts(workoutLevel);

  return (
    <ScreenLayout title="Gym Workout Planner">
      {gymWorkouts.map((workout) => (
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
