'use client';
import Code from '@/components/problem/Code'
import SideLeft from '@/components/problem/SideLeft'
import TestComponent from '@/components/problem/Test'
import { useState } from 'react';

export default function ProblemId({ params }: { 
  params: {problemId: string}
}) {
  const [testResult, setTestResult] = useState<string>('');

  // Función para recibir la respuesta del servidor desde Code.tsx y actualizar el estado
  const handleTestResult = (result: string) => {
    setTestResult(result);
  };
  return (
    <div className="flex gap-4 m-4">
      <div className="w-1/2">
        <SideLeft />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex-grow">
          <Code onTestResult={handleTestResult} />
        </div>
        <div className="flex-grow">
          <TestComponent testResult={testResult} />
        </div>
      </div>
    </div>
  );
}
