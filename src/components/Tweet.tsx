export function Tweet(props){
  console.log(props)
  return(
    <div>
      <strong>{props.user}</strong>
      <p>{props.content}</p>
      <button>Like</button>
    </div>
  )
}