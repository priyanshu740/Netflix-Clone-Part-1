import React from 'react'
import Featured from './Featured'
import List from './List'
import Navbar from './Navbar'
import '../Styles/home.css'

function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <Featured type='series'/>
            <List/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
