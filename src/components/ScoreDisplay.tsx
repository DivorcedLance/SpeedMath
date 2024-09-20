export function ScoreDisplay({ good, bad }: { good: number, bad: number }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold">Score</h1>
      <h2 className="text-green-600 font-bold">Correct: {good}</h2>
      <h2 className="text-red-400 font-bold">Incorrect: {bad}</h2>
    </div>
  )
}