import Code from '@/components/problem/Code'
import SideLeft from '@/components/problem/SideLeft'
import TestComponent from '@/components/problem/Test'

export default function ProblemId({ params }: { 
  params: {problemId: string}
}) {
  return (
    <div className="flex gap-4 m-4">
      <div className="w-1/2">
        <SideLeft />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex-grow">
          <Code />
        </div>
        <div className="flex-grow">
          <TestComponent />
        </div>
      </div>
    </div>
  )
}
