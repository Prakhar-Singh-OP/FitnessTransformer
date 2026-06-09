import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../utils/responsive';

export default function ThemeToggle() {
  const { theme, isDark, toggleTheme } = useTheme();
  const { scale } = useResponsive();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      accessibilityRole="button"
      accessibilityLabel={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      style={{
        backgroundColor: theme.accent,
        borderRadius: Math.max(10, scale(14)),
        paddingVertical: scale(10),
        paddingHorizontal: scale(12),
        marginTop: scale(12),
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontWeight: '800',
          textAlign: 'center',
        }}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </Text>
    </TouchableOpacity>
  );
}
