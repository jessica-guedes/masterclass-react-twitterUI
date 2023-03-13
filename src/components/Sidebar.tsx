import { Hash, House, Bell, FileText, BookmarkSimple, User, DotsThreeCircle, Envelope } from 'phosphor-react'
import twitterLogo from '../assets/logo.tweet.svg'

import './Sidebar.css'

export function Sidebar(){
  return(
    <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo" />
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill'/>
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>
  )
}