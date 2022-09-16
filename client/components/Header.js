import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const AUDIO = document.createElement("audio");

const Header = ({items})=>{
    const play =()=>{
        AUDIO.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
        AUDIO.load();
        AUDIO.play();
    }
    const pause =()=>{
        AUDIO.pause()
    }

    return(
        <div className='header'>
            <div className='music-bar'>
                <h1 style={{display: 'inline'}}><Link to='/items'>Items ({ items.length })</Link></h1>
                <span>
                    <button onClick={play}>PLAY MUSIC</button>
                    <button onClick={pause}>PAUSE MUSIC</button>
                </span>
            </div>
            <div className='products-in-out'>
                <div className='in-out-bar'>
                    <Link className='in-out-bar-link' to='/'>Home</Link>
                </div>
                <div className='in-out-bar'>
                    <Link className='in-out-bar-link' to='/items/create'>Receive Products</Link>
                </div>
                <div className='in-out-bar'>
                    <Link className='in-out-bar-link' to='/items/invoice'>Create an invoice</Link>
                </div>
                <div className='in-out-bar'>
                    <Link className='in-out-bar-link' to='/items/chart'>See Chart</Link>
                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default Header