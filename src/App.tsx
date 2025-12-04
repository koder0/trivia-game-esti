import { useEffect, useState } from "react"
import Trivia from "./Trivia"

const API_URL = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy"

export type TriviaType = {
  category: string,
  correct_answer: string,
  incorrect_answers: string[]
  question: string
}

const App = () => {
  const [trivias, setTrivias] = useState<TriviaType[]>([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const nextQuestion = (prevIsSuccess: boolean) => {
    if(prevIsSuccess){
      setScore(prev => prev + 1)
    }
    if(index < trivias.length - 1){
      setIndex(prev => prev + 1)
    }else{
      alert(`Játék vége! Az eredményed: ${index + 1} / ${prevIsSuccess ? score + 1 : score}`);
      window.location.reload();
    }
  }

    useEffect(()=>{
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setTrivias(data.results))
  }, [])

  return (
    <div>
      {trivias.length === 0 && <h1>Töltés...</h1>}
      <h1>Score: {index} / {score}</h1>
      {trivias.length > 0 && <Trivia trivia={trivias[index]} nextQuestion={nextQuestion} {...trivias[index]} />}
    </div>
  )
}

export default App