import React from 'react'
import { PROBLEMS } from '@/data/problems'
import Link from 'next/link'

export default function Problems() {
  
  return (
    <div>
      <h1>Problem list</h1>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>Status</th>
            <th>Problem name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            PROBLEMS.map(problem => (
            <tr key={problem.title}>
                <td>Pending</td>
                <Link href={`problems/${problem.id}`}>
                  <td>{problem.title}</td>
                </Link>
            </tr>
            ))
          }
          
          
        </tbody>
      </table>
    </div>
  )
}
