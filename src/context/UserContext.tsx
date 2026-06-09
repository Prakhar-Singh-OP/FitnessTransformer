import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type WorkoutLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type WorkoutGoal = 'Weight Gain' | 'Weight Loss' | 'Strength' | 'Endurance' | 'Flexibility';

type UserContextType = {
  workoutLevel: WorkoutLevel;
  setWorkoutLevel: (level: WorkoutLevel) => Promise<void>;
  goal: WorkoutGoal;
  setGoal: (goal: WorkoutGoal) => Promise<void>;
  // premium / ads
  noAds: boolean;
  setNoAds: (v: boolean) => Promise<void>;
  // consent for personalized ads (null = not asked, true = personalized, false = non-personalized)
  personalizedAds: boolean | null;
  setPersonalizedAds: (v: boolean | null) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);
const STORAGE_LEVEL = 'USER_WORKOUT_LEVEL';
const STORAGE_GOAL = 'USER_WORKOUT_GOAL';
const STORAGE_NO_ADS = 'USER_NO_ADS';
const STORAGE_PERSONALIZED = 'USER_PERSONALIZED_ADS';

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [workoutLevel, setWorkoutLevelState] = useState<WorkoutLevel>('Beginner');
  const [goal, setGoalState] = useState<WorkoutGoal>('Weight Gain');
  const [noAds, setNoAdsState] = useState<boolean>(false);
  const [personalizedAds, setPersonalizedAdsState] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const savedLevel = await AsyncStorage.getItem(STORAGE_LEVEL);
        if (
          savedLevel === 'Beginner' ||
          savedLevel === 'Intermediate' ||
          savedLevel === 'Advanced'
        ) {
          setWorkoutLevelState(savedLevel);
        }
        const savedGoal = await AsyncStorage.getItem(STORAGE_GOAL);
        if (
          savedGoal === 'Weight Gain' ||
          savedGoal === 'Weight Loss' ||
          savedGoal === 'Strength' ||
          savedGoal === 'Endurance' ||
          savedGoal === 'Flexibility'
        ) {
          setGoalState(savedGoal);
        }
        const savedNoAds = await AsyncStorage.getItem(STORAGE_NO_ADS);
        if (savedNoAds === 'true') setNoAdsState(true);
        const savedPersonalized = await AsyncStorage.getItem(STORAGE_PERSONALIZED);
        if (savedPersonalized === 'true') setPersonalizedAdsState(true);
        if (savedPersonalized === 'false') setPersonalizedAdsState(false);
      } catch (error) {
        console.warn('Unable to load user preferences:', error);
      }
    })();
  }, []);

  const setWorkoutLevel = async (level: WorkoutLevel) => {
    try {
      await AsyncStorage.setItem(STORAGE_LEVEL, level);
      setWorkoutLevelState(level);
    } catch (error) {
      console.warn('Unable to save workout level:', error);
    }
  };

  const setGoal = async (value: WorkoutGoal) => {
    try {
      await AsyncStorage.setItem(STORAGE_GOAL, value);
      setGoalState(value);
    } catch (error) {
      console.warn('Unable to save goal preference:', error);
    }
  };

  const setNoAds = async (v: boolean) => {
    try {
      await AsyncStorage.setItem(STORAGE_NO_ADS, v ? 'true' : 'false');
      setNoAdsState(v);
    } catch (error) {
      console.warn('Unable to save no-ads preference:', error);
    }
  };

  const setPersonalizedAds = async (v: boolean | null) => {
    try {
      if (v === null) {
        await AsyncStorage.removeItem(STORAGE_PERSONALIZED);
      } else {
        await AsyncStorage.setItem(STORAGE_PERSONALIZED, v ? 'true' : 'false');
      }
      setPersonalizedAdsState(v);
    } catch (error) {
      console.warn('Unable to save personalized ads preference:', error);
    }
  };

  const value = useMemo(
    () => ({ workoutLevel, setWorkoutLevel, goal, setGoal, noAds, setNoAds, personalizedAds, setPersonalizedAds }),
    [workoutLevel, goal, noAds, personalizedAds],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
