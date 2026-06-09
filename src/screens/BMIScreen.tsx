import React, { useMemo, useState } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import Input from '../components/Input';
import Result from '../components/Result';

export default function BMIScreen() {
  const [weight, setWeight] = useState('60');
  const [height, setHeight] = useState('175');

  const bmi = useMemo(() => {
    const h = Number(height) / 100;
    return h > 0 ? (Number(weight) / (h * h)).toFixed(1) : '0.0';
  }, [weight, height]);

  return (
    <ScreenLayout title="BMI Calculator">
      <Input value={weight} setValue={setWeight} placeholder="Weight KG" />
      <Input value={height} setValue={setHeight} placeholder="Height CM" />
      <Result text={`BMI: ${bmi}`} />
    </ScreenLayout>
  );
}
