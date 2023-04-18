import React from 'react'
import './index.css'
import Header from './components/Header'
import Affiliates from './components/Affiliates'
import RecentVideos from './components/RecentVideos'
import Playlist from './components/Playlist'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex justify-center bg-fixed bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-700 to-zinc-800">
      <div className='  rounded-xl m-4 bg-gray-500 bg-opacity-30 drop-shadow-xl'>
          <Header />
          <Affiliates />
          <Playlist />
          <RecentVideos />
          <Footer />
      </div>
    </div>
  )
}

export default App


