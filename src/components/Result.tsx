import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../utils/responsive';

type Props = {
  text: string;
};

export default function Result({ text }: Props) {
  const { theme } = useTheme();
  const { scale, font } = useResponsive();

  return (
    <View
      style={{
        backgroundColor: theme.accent,
        padding: scale(18),
        borderRadius: Math.max(12, scale(18)),
        marginTop: scale(10),
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: font(22),
          fontWeight: '900',
          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </View>
  );
}
