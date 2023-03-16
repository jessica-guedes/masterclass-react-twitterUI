import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"


import './Status.css';

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'

]

export function Status(){
  return(
    <main className='status'>
            
      <Header title='Tweet'/>

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque aspernatur. Tempore eos ea placeat possimus, harum voluptates! Nam porro iure ut velit vero vel eaque aperiam tempora, saepe optio."/>

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/jessica-guedes.png" alt="Jessica Guedes" />
          <textarea  id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}