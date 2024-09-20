import { CustomInput } from "./CustomInput"
import { ProblemType } from "../types"
import { useEffect, useState } from "react"

export function Problem({ problem, onCorrect, onIncorrect }: { problem: ProblemType, onCorrect: () => void, onIncorrect: () => void }) {

  const [ problemState, setProblemState ] = useState(0)

  useEffect(() => {
    setProblemState(0)
  }, [problem])

  const handleSubmit = () => {
    const input = document.querySelector('input') as HTMLInputElement
    const userAnswer = parseInt(input.value)
    if (userAnswer === problem.correctAnswer) {
      setProblemState(1)
      onCorrect()
    } else {
      setProblemState(-1)
      onIncorrect()
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className={`${problemState === 1 ? 'text-green-500' : problemState === -1 ? 'text-red-500' : ''}`}>
        {problem.statement}
      </h2>
        <CustomInput 
          handleSubmit={handleSubmit} 
          focus={true} 
          borderColor={'border-gray-300'}/>
    </div>
  )
}