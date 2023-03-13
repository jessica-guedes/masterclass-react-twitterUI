import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <div>
      <Tweet user="Diego" content="meu primeiro tweet"/>
      <Tweet user="Jessica" content="hello world"/>
      <Tweet user="Leticia" content="testandooo"/>
    </div>
  
  </React.StrictMode>,
)
