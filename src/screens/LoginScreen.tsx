import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { useUser, WorkoutGoal } from '../context/UserContext';
import { RootStackParamList } from '../navigation/types';
import Input from '../components/Input';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { theme } = useTheme();
  const { font, scale } = useResponsive();
  const { setGoal } = useUser();
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [weight, setWeight] = useState('60');
  const [height, setHeight] = useState('175');
  const workoutGoals: WorkoutGoal[] = ['Weight Gain', 'Weight Loss', 'Strength', 'Endurance', 'Flexibility'];
  const [goal, setLocalGoal] = useState<WorkoutGoal>('Weight Gain');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text
          style={{
            color: theme.text,
            fontSize: font(42),
            fontWeight: '900',
            marginTop: scale(20),
          }}
        >
          FITNESS AI
        </Text>

        <Text style={{ color: theme.secondary, marginTop: scale(6), fontSize: font(16) }}>
          Multipurpose Fitness Application
        </Text>

        <View
          style={{
            backgroundColor: theme.card,
            marginTop: 40,
            borderRadius: 30,
            padding: 24,
          }}
        >
          {signup && <Input value={name} setValue={setName} placeholder="Full Name" />}

          <Input value={email} setValue={setEmail} placeholder="Email" />
          <Input value={password} setValue={setPassword} placeholder="Password" secureTextEntry />

          {signup && (
            <>
              <Input value={weight} setValue={setWeight} placeholder="Weight" />
              <Input value={height} setValue={setHeight} placeholder="Height" />
              <Text
                style={{
                  color: theme.text,
                  fontWeight: '700',
                  marginBottom: scale(10),
                  marginTop: scale(8),
                }}
              >
                Fitness Goal
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: scale(8) }}>
                {workoutGoals.map((goalOption) => (
                  <TouchableOpacity
                    key={goalOption}
                    onPress={() => setLocalGoal(goalOption)}
                    accessibilityRole="button"
                    accessibilityLabel={`Select goal ${goalOption}`}
                    style={{
                      paddingVertical: scale(10),
                      paddingHorizontal: scale(12),
                      borderRadius: 16,
                      backgroundColor: goal === goalOption ? theme.accent : theme.background,
                      borderWidth: 1,
                      borderColor: theme.border,
                      minWidth: 110,
                    }}
                  >
                    <Text
                      style={{
                        color: goal === goalOption ? '#fff' : theme.text,
                        fontWeight: '700',
                        fontSize: font(13),
                      }}
                    >
                      {goalOption}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          <TouchableOpacity
            onPress={() => {
              void setGoal(goal);
              navigation.replace('App');
            }}
            accessibilityRole="button"
            accessibilityLabel={signup ? 'Sign up' : 'Log in'}
            style={{
              backgroundColor: theme.accent,
              padding: 18,
              borderRadius: 18,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontWeight: '800',
                fontSize: font(18),
              }}
            >
              {signup ? 'SIGN UP' : 'LOGIN'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSignup(!signup)}>
            <Text
              style={{
                color: theme.accent,
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              {signup ? 'Already have an account? Login' : 'Create New Account'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
