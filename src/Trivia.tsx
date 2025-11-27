import type { TriviaType } from "./App"

function randomNekem(a:string,b:string){
    return Math.floor(Math.random()*3 - 1)
}

const Trivia = (props: TriviaType ) => {
    const mixedList = [props.correct_answer, ...props.incorrect_answers].sort(randomNekem)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.question }}></div>
            {mixedList.map(i => <button
            onClick={()=>{
                if(i === props.correct_answer){
                    alert("Helyes!")
                }else{
                    alert("Hibás!")
                }
            }}
            >{i}</button>)}
        </div>
    )
}

export default Trivia