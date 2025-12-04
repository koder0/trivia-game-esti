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

            onClick={(event)=>{
                const btn = event.target as HTMLButtonElement

                if(answer === trivia.correct_answer){
                    btn.classList.add("success")
                    setTimeout(()=>{
                        nextQuestion(true)
                    },2000)
                }else{
                    btn.classList.add("fail")
                    setTimeout(()=>{
                        nextQuestion(false)
                    },2000)
                }
                
            }}
            >{answer}</button>)}
        </div>
    )
}

export default Trivia