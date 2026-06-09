import React, { useMemo, useState } from 'react';
import ScreenLayout from '../components/ScreenLayout';
import Input from '../components/Input';
import Result from '../components/Result';

export default function ProteinScreen() {
  const [weight, setWeight] = useState('60');

  const protein = useMemo(() => {
    return Math.round(Number(weight) * 2.2);
  }, [weight]);

  return (
    <ScreenLayout title="Protein Intake Calculator">
      <Input value={weight} setValue={setWeight} placeholder="Weight" />
      <Result text={`Protein: ${protein} g`} />
    </ScreenLayout>
  );
}
