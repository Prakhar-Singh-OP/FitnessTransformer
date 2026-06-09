import React from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../utils/responsive';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ScreenLayout({ title, children }: Props) {
  const { theme } = useTheme();
  const { scale, font } = useResponsive();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView contentContainerStyle={{ padding: Math.max(12, scale(20)) }}>
        <Text
          style={{
            color: theme.text,
            fontSize: font(34),
            fontWeight: '900',
            marginBottom: scale(18),
          }}
        >
          {title}
        </Text>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
