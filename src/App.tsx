import React, { FC } from 'react'
import { useRoutes } from 'react-router'
import Landing from './Views/Landing'
import Login from './Views/Login'
import Register from './Views/Register'
import Routes from './config/routes'
import NavBar from './components/NavBar'

const App:FC = (props) => {

  const routes = useRoutes(Routes)

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