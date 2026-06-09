import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useResponsive } from '../utils/responsive';
import ScreenLayout from '../components/ScreenLayout';
import Input from '../components/Input';
import { useTheme } from '../context/ThemeContext';
import AdBanner from '../components/AdBanner';

export default function DietScreen() {
  const [budget, setBudget] = useState('3000');
  const [foods, setFoods] = useState('');
  const { theme } = useTheme();

  const { scale, font } = useResponsive();

  return (
    <ScreenLayout title="Diet Planner">
      <Input value={budget} setValue={setBudget} placeholder="Budget" />
      <Input value={foods} setValue={setFoods} placeholder="Available Food Items" />

      <View
        style={{
          backgroundColor: theme.card,
          padding: scale(18),
          borderRadius: Math.max(12, scale(18)),
        }}
      >
        <Text style={{ color: theme.text, fontSize: font(20), fontWeight: '800' }}>
          Suggested Diet
        </Text>
        <Text style={{ color: theme.secondary, marginTop: scale(12) }}>
          Breakfast: Oats + Banana Shake
        </Text>
        <Text style={{ color: theme.secondary, marginTop: scale(10) }}>
          Lunch: Rice + Dal + Paneer
        </Text>
        <Text style={{ color: theme.secondary, marginTop: scale(10) }}>
          Dinner: Roti + Soybean Curry
        </Text>
      </View>
      <AdBanner />
    </ScreenLayout>
  );
}
