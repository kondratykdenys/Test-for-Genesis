import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import GameOver from './pages/GameOver'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/game/over',
    element: <GameOver />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
