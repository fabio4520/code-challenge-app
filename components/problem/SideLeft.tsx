import React from 'react'
import { PROBLEMS } from '@/data/problems'
import problemStyle from "./Problem.module.css"

export default function SideLeft() {
  const {title, description, examples, constraints  } = PROBLEMS[0];
  return (
    <div className={problemStyle.card}>
      <div className={problemStyle["card-header"]}>
        <p className='font-bold'>Description</p>
      </div>
      <div className='p-6'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='font-thin'>{description}</p>
        <br />
        <ul>
          {
            examples.map(example => (
              <li key={example.id}>
                <p className='font-bold'>Example {example.id}</p>
                <p className='font-thin'><span className='font-bold'>Input: </span>{example?.input}</p>
                <p className='font-thin'><span className='font-bold'>Output:</span> {example?.explanation}</p>
                {example.explanation ? <p>Explanation: {example.explanation}</p> : ""}
                <br />
              </li>
          ))
          }
        </ul>

        <p className='font-bold'>Constraints:</p>
        <ul className='max-w-md space-y-1 list-disc list-inside'>
          {
            constraints.map((constraint, index) => (
              <li key={index} className='font-thin '>
                {constraint}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
