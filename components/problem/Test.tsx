import problemStyle from "./Problem.module.css";

interface TestComponentProps {
  testResult: string;
}

export default function TestComponent({ testResult }: TestComponentProps) {
  return (
    <div className={problemStyle.card}>
      <div className={problemStyle["card-header"]}>
        <p className='font-bold'>Testcase</p>
      </div>
      <div className="p-6">
        {testResult ? (
          <p className="text-green-500">{testResult}</p>
        ) : (
          <p>No hay resultados de tests</p>
        )}
      </div>
    </div>
  )
}
