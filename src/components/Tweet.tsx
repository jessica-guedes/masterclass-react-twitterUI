interface TweetProps{
  user: string
  children: string
  likes?: number
}

export function Tweet(props: TweetProps){
  console.log(props)
  return(
    <div className="tweet" style={{borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  )
}