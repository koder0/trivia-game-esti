import type { TriviaType } from "./App"

function randomNekem(){
    return Math.floor(Math.random()*3 - 1)
}

const Trivia = ({nextQuestion, trivia}: {trivia: TriviaType, nextQuestion: (prevIsSuccess:boolean) => void} ) => {
    const mixedList = [trivia.correct_answer, ...trivia.incorrect_answers].sort(randomNekem)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: trivia.question }}></div>
            {mixedList.map(answer => <button
            onClick={()=>{
                if(answer === trivia.correct_answer){
                    alert("Helyes!")
                    nextQuestion(true)
                }else{
                    alert("Hibás!")
                    nextQuestion(false)
                }
                
            }}
            >{answer}</button>)}
        </div>
    )
}

export default Trivia