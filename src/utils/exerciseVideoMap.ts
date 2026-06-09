import { video3DAnimationPath } from './videoPaths';

/**
 * Complete mapping of exercise names to their 3D animation video files
 * Supports 180+ exercises across all categories
 */
export const exerciseToVideoMap: Record<string, string> = {
  // Chest exercises
  'Wall Push-Ups': 'Wall Push Up Exercise.mp4',
  'Knee Push-Ups': 'Knee Push-Ups.mp4',
  'Incline Push-Ups': 'Incline Push Up.mp4',
  'Floor Chest Press (with water bottles/dumbbells)': 'Floor Chest Press.mp4',
  'Standard Push-Ups': 'Standard Push-Ups.mp4',
  'Decline Push-Ups': 'Decline Push-Ups.mp4',
  'Archer Push-Ups': 'Archer Push-Ups.mp4',
  'Resistance Band Chest Fly': 'Resistance Band Chest Flys.mp4',
  'Push Ups': 'Standard Push-Ups.mp4',
  'Machine Chest Press': 'Machine Chest Press.mp4',
  'Dumbbell Bench Press': 'Dumbbell Bench Press.mp4',
  'Incline Dumbbell Press': 'Incline Dumbbell Chest Press.mp4',
  'Pec Deck Fly': 'Pec Deck Fly.mp4',
  'Barbell Bench Press': 'Barbell Bench Press.mp4',
  'Incline Bench Press': 'Incline Bench Press.mp4',
  'Dumbbell Fly': 'Dumbbell Fly.mp4',
  'Weighted Dips': 'Weighted Dips.mp4',
  'Heavy Barbell Bench Press': 'Barbell Bench Press.mp4',
  'Guillotine Press': 'Guillotine Press.mp4',
  'One-Arm Push-Ups': 'One-Arm Push-Ups.mp4',
  'Clap Push-Ups': 'Clap push-Ups.mp4',
  'Pseudo Planche Push-Ups': 'Pseudo Planche Push-Ups.mp4',
  'Ring Push-Ups': 'Ring Push-Ups.mp4',

  // Back exercises
  'Superman Hold': 'Superman Hold.mp4',
  'Bird Dog': 'Bird Dog.mp4',
  'Resistance Band Rows': 'Resistance Band Row.mp4',
  'Towel Rows': 'Towel Rows.webm',
  'Lat Pulldown': 'Lat Pulldown.mp4',
  'Seated Cable Row': 'Seated Cable Row.mp4',
  'Dumbbell Row': 'Dumbbell Row.mp4',
  'Assisted Pull-Ups': 'Assisted Pull Ups.mp4',
  'Pull-Ups': 'Pull-Ups.mp4',
  'Inverted Rows': 'Inverted Rows.mp4',
  'Resistance Band Deadlifts': 'Resistance Band Deadlift.mp4',
  'Reverse Snow Angels': 'Reverse Snow Angels.mp4',
  'Bent-Over Rows': 'Bent-Over Rows.mp4',
  'T-Bar Row': 'T-Bar Rows.mp4',
  'Deadlift': 'Deadlift.mp4',
  'Rack Pulls': 'RACK PULLS.mp4',
  'Weighted Pull-Ups': 'Weighted Pull-Ups.mp4',
  'Pendlay Rows': 'Pendlay Row.mp4',
  'Snatch-Grip Deadlift': 'Snatch-Grip Deadlift.mp4',
  'Muscle-Ups': 'MUSCLE UPS.mp4',
  'Front Lever Hold': 'Front Lever Hold.mp4',
  'Archer Pull-Ups': 'Archer Pull-Ups.mp4',

  // Shoulder exercises
  'Arm Circles': 'Arm Circle.mp4',
  'Pike Hold': 'Pike Hold.webm',
  'Dumbbell Shoulder Press': 'Dumbbell Shoulder Press.mp4',
  'Front Raises': 'Front Raises.mp4',
  'Machine Shoulder Press': 'Machine Shoulder Press.mp4',
  'Lateral Raises': 'Lateral Raises.mp4',
  'Arnold Press': 'Arnold Press.mp4',
  'Handstand Hold': 'Handstand Hold.mp4',
  'Pike Push-Ups': 'Pike Push-Ups.mp4',
  'Upright Rows': 'Upright Rows.mp4',
  'Rear Delt Fly': 'Rear Delt Fly.mp4',
  'Dumbbell Push Press': 'Dumbbell Push Press.mp4',
  'Handstand Push-Ups': 'Handstand Push-Ups.mp4',
  'Planche Lean': 'PLANCHE LEAN.mp4',
  'Handstand Walk': 'Handstand Walk.mp4',
  'Barbell Push Press': 'Barbell Push Press.mp4',
  'Seated Military Press': 'Seated Military Press.mp4',
  'Cable Y Raises': 'CABLE Y RAISE.mp4',

  // Biceps exercises
  'Dumbbell Curls': 'Dumbbell Curls.mp4',
  'Hammer Curls': 'Hammer Curls.mp4',
  'Resistance Band Curls': 'Resistance Band Curls.mp4',
  'EZ Bar Curl': 'EZ Bar Curls.mp4',
  'Cable Curl': 'Cable Curls.mp4',
  'Concentration Curls': 'Concentration Curls.mp4',
  'Zottman Curls': 'Zottman Curls.mp4',
  'Resistance Band Hammer Curls': 'Resistance Band Hammer Curls.mp4',
  'Preacher Curl': 'Preacher Curl.mp4',
  'Incline Dumbbell Curl': 'Incline Dumbbell Curl.mp4',
  'Hammer Curl': 'Hammer Curl.mp4',
  'Cable Hammer Curl': 'Cable Hammer Curl.mp4',
  'Drag Curl': 'Drag Curl.mp4',
  'Cheat Curl': 'Cheat Curl.mp4',
  'Heavy Barbell Curl': 'Heavy Barbell Curl.mp4',
  'Spider Curls': 'Spider Curls.mp4',
  'Weighted Chin-Ups': 'Weighted CHIN UPS.mp4',
  'Resistance Band Isometric Curls': 'Resistance Band Isometric Curls.mp4',
  'Heavy Concentration Curls': 'Heavy Concentration Curls.mp4',

  // Triceps exercises
  'Chair Dips': 'Chair Dips.mp4',
  'Tricep Extensions': 'Overhead Tricep Extension.mp4',
  'Diamond Knee Push-Ups': 'Diamond Knees Push Ups.mp4',
  'Rope Pushdown': 'Rope Pushdown.mp4',
  'Machine Dips': 'Machine Dips.mp4',
  'Overhead Cable Extension': 'Overhead Cable Extension.mp4',
  'Diamond Push-Ups': 'Diamond Push-Ups.mp4',
  'Bench Dips': 'Bench Dips 3D Tutorial 💪 #tricepdps.mp4',
  'Overhead Tricep Extensions': 'Overhead Tricep Extension.mp4',
  'Skull Crushers': 'Skull Crushers.mp4',
  'Close-Grip Bench Press': 'CLOSE-GRIP BENCH PRESS.mp4',
  'Rope Overhead Extension': 'Rope Overhead Extensions.mp4',
  'Korean Dips': 'KOREAN DIPS.mp4',
  'Ring Dips': 'Ring Dips.mp4',
  'One-Arm Tricep Push-Ups': 'One-Arm Tricep Push-Ups.mp4',
  'JM Press': 'JM PRESS.mp4',
  'Heavy Skull Crushers': 'Skull Crushers.mp4',

  // Legs exercises
  'Bodyweight Squats': 'Bodyweight Squats.mp4',
  'Lunges': 'Lunges.mp4',
  'Glute Bridges': 'Glute Bridge.mp4',
  'Step-Ups': 'Step Ups.mp4',
  'Calf Raises': 'Calf Raises.mp4',
  'Leg Press': 'Leg Press.mp4',
  'Goblet Squat': 'Goblet Squat.mp4',
  'Leg Extension': 'Leg Extension.mp4',
  'Leg Curl': 'Leg Curl.mp4',
  'Standing Calf Raise': 'Standing Calf Raise.mp4',
  'Bulgarian Split Squats': 'Bulgarian Split Squat.mp4',
  'Jump Squats': 'Jump Squats.mp4',
  'Walking Lunges': 'Walking Lunges.mp4',
  'Single-Leg Glute Bridges': 'Single leg Glute Bridge.mp4',
  'Back Squat': 'Back Squat.mp4',
  'Romanian Deadlift': 'Romanian Deadlift.mp4',
  'Hack Squat': 'HACK SQUAT.mp4',
  'Seated Calf Raise': 'SEATED CALF RAISE.mp4',
  'Pistol Squats': 'Pistol Squats.mp4',
  'Jump Lunges': 'Jumping Lunges.mp4',
  'Nordic Hamstring Curls': 'Nordic Hamstring Curls.mp4',
  'Shrimp Squats': 'SHRIMP SQUAT.mp4',
  'Front Squat': 'Front Squat.mp4',
  'Sumo Deadlift': 'SUMO DEADLIFT.mp4',
  'Bulgarian Split Squat': 'Bulgarian Split Squat.mp4',
  'Zercher Squat': 'Zercher Squat.mp4',
  'Nordic Curl': 'Nordic Curl.mp4',
  'Squats': 'Bodyweight Squats.mp4',

  // Core / Abs exercises
  'Crunches': 'Ab Crunches.mp4',
  'Plank': 'Plank.mp4',
  'Dead Bug': 'Dead Bug.mp4',
  'Leg Raises': 'Leg Raises.mp4',
  'Mountain Climbers': 'Mountain climbers.mp4',
  'Cable Crunch': 'Cable Crunch.mp4',
  'Decline Crunch': 'Decline Crunch.mp4',
  'Hanging Knee Raises': 'Hanging Knee Raises.mp4',
  'Russian Twists': 'Russian Twist.mp4',
  'Bicycle Crunches': 'Bicycle Crunches.mp4',
  'Side Plank': 'Side Plank.mp4',
  'V-Ups': 'V-Ups.mp4',
  'Flutter Kicks': 'Flutter Kicks.mp4',
  'Hanging Leg Raises': 'Hanging Leg Raises.mp4',
  'Cable Woodchopper': 'Cable Woodchopper.mp4',
  'Ab Wheel Rollout': 'Ab Wheel Roller.mp4',
  'Dragon Flag': 'Dragon Flag.mp4',
  'L-Sit Hold': 'L-Sit Hold.mp4',
  'Toes-to-Bar': 'Toes to Bar.mp4',
  'Hanging Windshield Wipers': 'Hanging Windshield Wiper.mp4',
  'Weighted Decline Sit-Ups': 'Weighted Decline Sit-Ups.mp4',
  'Heavy Cable Crunches': 'Heavy Cable Crunches.mp4',
  'Planks': 'Planks.mp4',

  // Cardio exercises
  'Jumping Jacks': 'Jumping Jacks.mp4',
  'High Knees': 'High Knees.mp4',
  'Marching in Place': 'Marching In Place.mp4',
  'Shadow Boxing': 'Shadow Boxing.mp4',
  'Treadmill Walking': 'Treadmill Walking.mp4',
  'Stationary Bike': 'Stationary Bike.mp4',
  'Elliptical': 'Elliptical.mp4',
  'Rowing Machine': 'ROWING MACHINE.mp4',
  'Burpees': 'Burpees.mp4',
  'Jump Rope': 'Jump Rope.mp4',
  'Skater Jumps': 'Skater Jumps.mp4',
  'Fast Mountain Climbers': 'Fast Mountain Climbers.mp4',
  'Incline Treadmill Run': 'Incline Treadmill Run.mp4',
  'HIIT Bike': 'HIIT Bike.mp4',
  'Battle Ropes': 'Battle Ropes.mp4',
  'Stair Climber': 'Stair Climbers.mp4',
  'Sled Push': 'Sled Push.mp4',
  'Assault Bike Sprint': 'Assault Bike Sprint.mp4',
  "Farmer's Walk": 'FARMER\'S WALK.mp4',
  'Plyometric Box Jumps': 'Plyometrics Box Jumps.mp4',
  'Tire Flips': 'Tire Flip.mp4',
};

/**
 * Get the video path for a specific exercise
 * @param exerciseName - The name of the exercise
 * @returns The full video path using the platform-specific path resolver, or null if not found
 */
export function getExerciseVideoPath(exerciseName: string): string | null {
  if (!exerciseName) return null;

  // First try exact match
  if (exerciseToVideoMap[exerciseName]) {
    return video3DAnimationPath(exerciseToVideoMap[exerciseName]);
  }

  // Try case-insensitive match
  const normalized = exerciseName.toLowerCase();
  for (const [key, value] of Object.entries(exerciseToVideoMap)) {
    if (key.toLowerCase() === normalized) {
      return video3DAnimationPath(value);
    }
  }

  return null;
}

/**
 * Update a workout exercise with its corresponding video path
 * @param exercise - The exercise object with a title property
 * @returns The exercise with videoUri populated
 */
export function enrichExerciseWithVideo(exercise: any) {
  const videoPath = getExerciseVideoPath(exercise.title);
  return {
    ...exercise,
    videoUri: videoPath || exercise.videoUri,
  };
}

/**
 * Batch update multiple exercises with video paths
 * @param exercises - Array of exercise objects
 * @returns Array of exercises with video paths populated
 */
export function enrichExercisesWithVideos(exercises: any[]) {
  return exercises.map(enrichExerciseWithVideo);
}
