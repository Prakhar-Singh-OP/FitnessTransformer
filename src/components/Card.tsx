import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useResponsive } from '../utils/responsive';

type Props = {
  title: string;
  onPress: () => void;
};

export default function Card({ title, onPress }: Props) {
  const { scale, font } = useResponsive();
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open ${title}`}
      style={{ marginBottom: 18 }}
    >
      <LinearGradient
        colors={['#1e3a8a', '#06b6d4']}
        style={{
          padding: scale(20),
          borderRadius: Math.max(12, scale(20)),
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: font(22),
            fontWeight: '800',
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
