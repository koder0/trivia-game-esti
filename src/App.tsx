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

  useEffect(()=>{
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setTrivias(data.results))
  }, [])

  return (
    <div>
      {trivias.length === 0 && <h1>Töltés...</h1>}
      
      {trivias.map(t => <Trivia {...t} />)}
    </div>
  )
}

export default App