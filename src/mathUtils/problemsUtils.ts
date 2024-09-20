import { ProblemType } from "../types"

export function generateAddSubstractProblemStatement(): string {
  const numTerms = Math.floor(Math.random() * 5) + 2;
  let result = '';

  for (let i = 0; i < numTerms; i++) {
      const randomNum = Math.floor(Math.random() * 25);
      const sign = i === 0 ? '' : (Math.random() < 0.5 ? '+' : '-');

      result += `${sign}${randomNum}`;
  }

  return result;
}

export function evaluateMathProblem(problem: string): number
{
  return eval(problem);
}

export function generateRandomMathProblem(): ProblemType {
  const statement = generateAddSubstractProblemStatement();
  const correctAnswer = evaluateMathProblem(statement);
  return { statement, correctAnswer };
}