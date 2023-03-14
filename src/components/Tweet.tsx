import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

interface TweetProps {
  content: string
}
export function Tweet(props: TweetProps){
  return(
    <a href='#' className="tweet">
     <img src="https://github.com/jessica-guedes.png" alt="Jessica Guedes" />

     <div className='tweet-content'>
      <div className='tweet-content-header'>
        <strong>Jessica Guedes</strong>
        <span>@jessicaguedes.dev</span>
      </div>

      <p>{props.content}</p>

      <div className='tweet-content-footer'>
        <button typeof='button'>
          <ChatCircle />
          20
        </button>

        <button typeof='button'>
          <ArrowsClockwise />
          20
        </button>

        <button typeof='button'>
          <Heart />
          20
        </button>
      </div>
     </div>
    </a>
  )
}