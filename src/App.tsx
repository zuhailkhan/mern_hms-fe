import React, { FC } from 'react'
import { useRoutes } from 'react-router'
import Routes from './config/routes'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'

const App:FC = (props) => {

  const routes = useRoutes(Routes)

  const randomVal = useSelector(state => state.randomValue)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        {routes}
      </div>
    </>
  )
}

export default App