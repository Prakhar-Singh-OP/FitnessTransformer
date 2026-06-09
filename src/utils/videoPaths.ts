import { Platform } from 'react-native';

const nativeVideoSourceMap: Record<string, number> = {
  'Standard Push-Ups.mp4': require('../../public/3D Animation Videos/Standard Push-Ups.mp4'),
  'Bodyweight Squats.mp4': require('../../public/3D Animation Videos/Bodyweight Squats.mp4'),
  'Plank.mp4': require('../../public/3D Animation Videos/Plank.mp4'),
  'Lunges.mp4': require('../../public/3D Animation Videos/Lunges.mp4'),
  'Burpees.mp4': require('../../public/3D Animation Videos/Burpees.mp4'),
  'Mountain climbers.mp4': require('../../public/3D Animation Videos/Mountain climbers.mp4'),
  'Barbell Bench Press.mp4': require('../../public/3D Animation Videos/Barbell Bench Press.mp4'),
  'Deadlift.mp4': require('../../public/3D Animation Videos/Deadlift.mp4'),
  'Lat Pulldown.mp4': require('../../public/3D Animation Videos/Lat Pulldown.mp4'),
  'Dumbbell Shoulder Press.mp4': require('../../public/3D Animation Videos/Dumbbell Shoulder Press.mp4'),
  'Leg Press.mp4': require('../../public/3D Animation Videos/Leg Press.mp4'),
  'Seated Cable Row.mp4': require('../../public/3D Animation Videos/Seated Cable Row.mp4'),
  'Clap push-Ups.mp4': require('../../public/3D Animation Videos/Clap push-Ups.mp4'),
  'Bulgarian Split Squat.mp4': require('../../public/3D Animation Videos/Bulgarian Split Squat.mp4'),
  'Planks.mp4': require('../../public/3D Animation Videos/Planks.mp4'),
  'Triceps Dips.mp4': require('../../public/3D Animation Videos/Triceps Dips.mp4'),
  'Battle Ropes.mp4': require('../../public/3D Animation Videos/Battle Ropes.mp4'),
  'Pull-Ups.mp4': require('../../public/3D Animation Videos/Pull-Ups.mp4'),
  'Dumbbell Curls.mp4': require('../../public/3D Animation Videos/Dumbbell Curls.mp4'),
  'Leg Curl.mp4': require('../../public/3D Animation Videos/Leg Curl.mp4'),
  'Leg Extension.mp4': require('../../public/3D Animation Videos/Leg Extension.mp4'),
  'Incline Push Up.mp4': require('../../public/3D Animation Videos/Incline Push Up.mp4'),
  'Jump Squats.mp4': require('../../public/3D Animation Videos/Jump Squats.mp4'),
  'Jumping Jacks.mp4': require('../../public/3D Animation Videos/Jumping Jacks.mp4'),
  'Dumbbell Row.mp4': require('../../public/3D Animation Videos/Dumbbell Row.mp4'),
  'Calf Raises.mp4': require('../../public/3D Animation Videos/Calf Raises.mp4'),
  'Front Raises.mp4': require('../../public/3D Animation Videos/Front Raises.mp4'),
  'Lateral Raises.mp4': require('../../public/3D Animation Videos/Lateral Raises.mp4'),
  'Cable Curls.mp4': require('../../public/3D Animation Videos/Cable Curls.mp4'),
  'Rope Pushdown.mp4': require('../../public/3D Animation Videos/Rope Pushdown.mp4'),
  'Hanging Leg Raise.mp4': require('../../public/3D Animation Videos/Hanging Leg Raise.mp4'),
  'Ab Crunches.mp4': require('../../public/3D Animation Videos/Ab Crunches.mp4'),
  'Bicycle Crunches.mp4': require('../../public/3D Animation Videos/Bicycle Crunches.mp4'),
  'Goblet Squat.mp4': require('../../public/3D Animation Videos/Goblet Squat.mp4'),
  'Preacher Curl.mp4': require('../../public/3D Animation Videos/Preacher Curl.mp4'),
  'Skull Crushers.mp4': require('../../public/3D Animation Videos/Skull Crushers.mp4'),
  'Romanian Deadlift.mp4': require('../../public/3D Animation Videos/Romanian Deadlift.mp4'),
  'Machine Chest Press.mp4': require('../../public/3D Animation Videos/Machine Chest Press.mp4'),
  'Pec Deck Fly.mp4': require('../../public/3D Animation Videos/Pec Deck Fly.mp4'),
  "FARMER'S WALK.mp4": require('../../public/3D Animation Videos/FARMER\'S WALK.mp4'),
  'Jump Rope.mp4': require('../../public/3D Animation Videos/Jump Rope.mp4'),
  'High Knees.mp4': require('../../public/3D Animation Videos/High Knees.mp4'),
  'Plyometrics Box Jumps.mp4': require('../../public/3D Animation Videos/Plyometrics Box Jumps.mp4'),
  'Glute Bridge.mp4': require('../../public/3D Animation Videos/Glute Bridge.mp4'),
  'Side Plank.mp4': require('../../public/3D Animation Videos/Side Plank.mp4'),
  'Dead Bug.mp4': require('../../public/3D Animation Videos/Dead Bug.mp4'),
  'Superman Hold.mp4': require('../../public/3D Animation Videos/Superman Hold.mp4'),
};

export function video3DAnimationPath(fileName: string): string | number {
  if (!fileName) {
    return '';
  }

  const encodedFileName = encodeURIComponent(fileName);

  if (Platform.OS === 'web') {
    return `/3D%20Animation%20Videos/${encodedFileName}`;
  }

  const nativeSource = nativeVideoSourceMap[fileName];
  if (nativeSource) {
    return nativeSource;
  }

  return `file:///3D%20Animation%20Videos/${encodedFileName}`;
}

export function getVideoPath(fileName: string): string | number {
  return video3DAnimationPath(fileName);
}
