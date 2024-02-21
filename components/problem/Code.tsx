'use client';
import { FormEvent, useState } from "react";
import problemStyle from "./Problem.module.css";

interface CodeProps {
  onTestResult: (result: string) => void; // Define una función de retorno de llamada para pasar la respuesta al padre
}

export default function Code({ onTestResult }: CodeProps) {
  const [code, setCode] = useState('def solution(arr):');

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/code/runtests", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code
        })
      });
      if (response.ok) {
        console.log("Datos enviados correctamente");
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        onTestResult(data.message); // Llama a la función de retorno de llamada con la respuesta del servidor
      } else {
        console.error('Error al enviar datos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  }

  return (
    <div className={problemStyle.card}>
      <div className={problemStyle["card-header"]}>
        <p className='font-bold'>&lt;/&gt; Code</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="p-6" >
          <textarea className="w-full dark:bg-gray-900 p-6" rows={16} autoFocus onChange={(e)=> setCode(e.target.value)} value={code}></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button type="submit" className="focus:outline-none text-green-400 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-green-800">Submit Code</button>
        </div>
      </form>
    </div>
  )
}
