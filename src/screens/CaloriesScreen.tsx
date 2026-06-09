import React, { useMemo, useState } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import Input from '../components/Input';
import Result from '../components/Result';

export default function CaloriesScreen() {
  const [age, setAge] = useState('18');
  const [weight, setWeight] = useState('60');
  const [height, setHeight] = useState('175');

  const calories = useMemo(() => {
    return Math.round(10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5);
  }, [age, weight, height]);

  return (
    <ScreenLayout title="Calories Calculator">
      <Input value={age} setValue={setAge} placeholder="Age" />
      <Input value={weight} setValue={setWeight} placeholder="Weight" />
      <Input value={height} setValue={setHeight} placeholder="Height" />
      <Result text={`Calories: ${calories} kcal`} />
    </ScreenLayout>
  );
}
