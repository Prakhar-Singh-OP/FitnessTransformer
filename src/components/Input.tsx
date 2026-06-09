import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../utils/responsive';

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function Input({ value, setValue, placeholder, secureTextEntry = false }: Props) {
  const { theme } = useTheme();
  const { scale } = useResponsive();

  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={theme.secondary}
      secureTextEntry={secureTextEntry}
      accessibilityLabel={placeholder}
      style={{
        backgroundColor: theme.input,
        color: theme.text,
        padding: scale(14),
        borderRadius: Math.max(8, scale(12)),
        marginBottom: scale(12),
        borderWidth: 1,
        borderColor: theme.border,
      }}
    />
  );
}
