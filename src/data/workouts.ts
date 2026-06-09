import { video3DAnimationPath } from '../utils/videoPaths';
import { enrichExerciseWithVideo } from '../utils/exerciseVideoMap';

export type WorkoutLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type WorkoutGoal = 'Weight Gain' | 'Weight Loss' | 'Strength' | 'Endurance' | 'Flexibility';
export type WorkoutCategory = 'Home' | 'Gym' | 'Gallery';

export type WorkoutExercise = {
  title: string;
  sets: string;
  videoUri: string;
  category: WorkoutCategory;
  goals: WorkoutGoal[];
  levels: WorkoutLevel[];
  description: string;
};

const workoutDatabase: WorkoutExercise[] = [
  {
    title: 'Push Ups',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Standard Push-Ups.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Build upper-body strength and core stability with high-rep push ups.',
  },
  {
    title: 'Squats',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Bodyweight Squats.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Strength', 'Flexibility'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Train legs, glutes and mobility with bodyweight squats.',
  },
  {
    title: 'Planks',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Plank.mp4'),
    category: 'Home',
    goals: ['Strength', 'Flexibility', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Improve core endurance and posture with plank holds.',
  },
  {
    title: 'Lunges',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Lunges.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Strength', 'Flexibility'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Develop leg strength and balance with alternating lunges.',
  },
  {
    title: 'Burpees',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Burpees.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'High-intensity full-body movement for cardio and calorie burn.',
  },
  {
    title: 'Mountain Climbers',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Mountain climbers.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Boost endurance and core control with mountain climbers.',
  },
  {
    title: 'Bench Press',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Barbell Bench Press.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Build chest and pressing power with bench press technique.',
  },
  {
    title: 'Deadlift',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Deadlift.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Increase posterior chain strength with the deadlift movement.',
  },
  {
    title: 'Lat Pulldown',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Lat Pulldown.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Strengthen your back and improve pulling power with lat pulldowns.',
  },
  {
    title: 'Shoulder Press',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Dumbbell Shoulder Press.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Build shoulder stability and overhead strength at the gym.',
  },
  {
    title: 'Leg Press',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Leg Press.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Target quads and glutes with controlled leg press reps.',
  },
  {
    title: 'Cable Rows',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Seated Cable Row.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Improve back strength and posture with cable row exercises.',
  },
  {
    title: 'Plyometric Push Ups',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Clap push-Ups.mp4'),
    category: 'Gallery',
    goals: ['Weight Loss', 'Endurance', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Explore explosive push ups for power and conditioning.',
  },
  {
    title: 'Bulgarian Split Squats',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Bulgarian Split Squat.mp4'),
    category: 'Gallery',
    goals: ['Strength', 'Flexibility'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Challenge your lower body with single-leg strength work.',
  },
  {
    title: 'Decline Plank',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Planks.mp4'),
    category: 'Gallery',
    goals: ['Strength', 'Endurance', 'Flexibility'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Improve core strength with an advanced decline plank variation.',
  },
  {
    title: 'Triceps Dips',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Triceps Dips.mp4'),
    category: 'Gallery',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Sculpt triceps and pressing strength with dip variations.',
  },
  {
    title: 'Kettlebell Swing',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Battle Ropes.mp4'),
    category: 'Gallery',
    goals: ['Weight Loss', 'Endurance', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Boost conditioning with dynamic kettlebell swings.',
  },
  {
    title: 'Pull-Ups',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Pull-Ups.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Build back and arm strength with traditional pull-ups.',
  },
  {
    title: 'Dumbbell Curls',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Dumbbell Curls.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Target biceps with controlled dumbbell curl movements.',
  },
  {
    title: 'Leg Curl',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Leg Curl.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Isolate hamstrings with machine leg curl exercises.',
  },
  {
    title: 'Leg Extension',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Leg Extension.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Build quadriceps with controlled leg extension movements.',
  },
  {
    title: 'Incline Push-Ups',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Incline Push Up.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Modify push-ups with incline for easier progression.',
  },
  {
    title: 'Jump Squats',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Jump Squats.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Explosive lower body exercise for power and cardio.',
  },
  {
    title: 'Jumping Jacks',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Jumping Jacks.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Classic warm-up and cardio exercise for all levels.',
  },
  {
    title: 'Dumbbell Rows',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Dumbbell Row.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Build back strength with single-arm dumbbell rows.',
  },
  {
    title: 'Calf Raises',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Calf Raises.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Isolate and strengthen calf muscles with standing raises.',
  },
  {
    title: 'Front Raises',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Front Raises.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Target anterior deltoids with controlled front raise movements.',
  },
  {
    title: 'Lateral Raises',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Lateral Raises.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Broaden shoulders with lateral raise exercises.',
  },
  {
    title: 'Cable Curls',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Cable Curls.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Build biceps with constant tension cable curls.',
  },
  {
    title: 'Tricep Pushdowns',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Rope Pushdown.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Isolate triceps with rope pushdown exercises.',
  },
  {
    title: 'Hanging Leg Raises',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Hanging Leg Raise.mp4'),
    category: 'Gallery',
    goals: ['Strength', 'Endurance'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Advanced abdominal exercise for core strength.',
  },
  {
    title: 'Ab Crunches',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Ab Crunches.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Target abs with traditional crunches for core definition.',
  },
  {
    title: 'Bicycle Crunches',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Bicycle Crunches.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Engage obliques and abs with bicycle crunch movements.',
  },
  {
    title: 'Goblet Squats',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Goblet Squat.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Beginner-friendly squat variation with dumbbell resistance.',
  },
  {
    title: 'Preacher Curls',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Preacher Curl.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Isolate biceps with preacher curl bench for strict form.',
  },
  {
    title: 'Skull Crushers',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Skull Crushers.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Target triceps with skull crusher exercises.',
  },
  {
    title: 'Romanian Deadlift',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Romanian Deadlift.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Build posterior chain strength with hip hinge movement.',
  },
  {
    title: 'Machine Chest Press',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Machine Chest Press.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Controlled chest exercise using machine resistance.',
  },
  {
    title: 'Pec Deck Fly',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('Pec Deck Fly.mp4'),
    category: 'Gym',
    goals: ['Weight Gain', 'Strength'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Isolate chest muscles with pec deck machine flyes.',
  },
  {
    title: 'Farmer Walk',
    sets: '4 Sets',
    videoUri: video3DAnimationPath('FARMER\'S WALK.mp4'),
    category: 'Gym',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Build grip and core strength with farmer carries.',
  },
  {
    title: 'Jump Rope',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Jump Rope.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Classic cardio exercise for endurance and coordination.',
  },
  {
    title: 'High Knees',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('High Knees.mp4'),
    category: 'Home',
    goals: ['Weight Loss', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Cardio exercise that elevates heart rate quickly.',
  },
  {
    title: 'Box Jumps',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Plyometrics Box Jumps.mp4'),
    category: 'Gallery',
    goals: ['Weight Loss', 'Endurance', 'Strength'],
    levels: ['Intermediate', 'Advanced'],
    description: 'Explosive lower body power with plyometric box jumps.',
  },
  {
    title: 'Glute Bridge',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Glute Bridge.mp4'),
    category: 'Home',
    goals: ['Strength', 'Weight Gain'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Activate and strengthen glutes with bridge holds.',
  },
  {
    title: 'Side Plank',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Side Plank.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Target obliques and stabilizer muscles with side plank.',
  },
  {
    title: 'Dead Bug',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Dead Bug.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Core stability exercise perfect for beginners.',
  },
  {
    title: 'Superman Hold',
    sets: '3 Sets',
    videoUri: video3DAnimationPath('Superman Hold.mp4'),
    category: 'Home',
    goals: ['Strength', 'Endurance'],
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    description: 'Strengthen back and posterior chain with superman exercises.',
  },
];

export function getHomeWorkouts(level?: WorkoutLevel) {
  return workoutDatabase
    .filter((exercise) => exercise.category === 'Home' && (!level || exercise.levels.includes(level)))
    .map(enrichExerciseWithVideo);
}

export function getGymWorkouts(level?: WorkoutLevel) {
  return workoutDatabase
    .filter((exercise) => exercise.category === 'Gym' && (!level || exercise.levels.includes(level)))
    .map(enrichExerciseWithVideo);
}

export function getGalleryWorkouts(level?: WorkoutLevel) {
  return workoutDatabase
    .filter((exercise) => exercise.category === 'Gallery' && (!level || exercise.levels.includes(level)))
    .map(enrichExerciseWithVideo);
}

export function getAllWorkouts(level?: WorkoutLevel) {
  return workoutDatabase
    .filter((exercise) => !level || exercise.levels.includes(level))
    .map(enrichExerciseWithVideo);
}

export function getRecommendedWorkouts(goal: WorkoutGoal, level: WorkoutLevel) {
  return workoutDatabase
    .filter((exercise) => exercise.goals.includes(goal) && exercise.levels.includes(level))
    .map(enrichExerciseWithVideo);
}
