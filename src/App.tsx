import { useState } from 'react'
import './App.css'
import { Problem } from './components/Problem'
import { ProblemType } from './types'
import { generateRandomMathProblem } from './mathUtils/problemsUtils'
import { ScoreDisplay } from './components/ScoreDisplay'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { DarkModeToggle } from './components/DarkModeToggle'

function App() {
  const [currentProblem, setCurrentProblem] = useState<ProblemType>(generateRandomMathProblem())
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const { width, height } = useWindowSize() // Para ajustar el tamaño del confeti a la ventana

  const handleCorrect = () => {
    setCurrentProblem(generateRandomMathProblem())
    setGood(good + 1)
    setShowConfetti(true)

    // Ocultar el confeti después de un tiempo
    setTimeout(() => setShowConfetti(false), 3000) // Dura 3 segundos
  }

  const handleIncorrect = () => {
    setBad(bad + 1)
  }


  return (
    <div className={'flex flex-col h-full items-center justify-between text-6xl p-5 bg-white text-black dark:bg-slate-900 dark:text-white'}>
      <h1 className="text-8xl text-center">SpeedMath</h1>
      <Problem problem={currentProblem} onCorrect={handleCorrect} onIncorrect={handleIncorrect} />
      <ScoreDisplay good={good} bad={bad} />
      
      <DarkModeToggle />
      
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  )
}

export default App
