import problemStyle from "./Problem.module.css"

export default function Code() {
  return (
    <div className={problemStyle.card}>
      <div className={problemStyle["card-header"]}>
        <p className='font-bold'>&lt;/&gt; Code</p>
      </div>
      <div className="p-6">
      <textarea className="w-full dark:bg-gray-900 p-6" rows={16} autoFocus>def solution(arr):</textarea>
      </div>
    </div>
  )
}
