import React, { FC, useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router'
import Routes from './config/routes'
import NavBar from './components/NavBar'
import { privateCall } from './api/axios'

const App:FC = (props) => {
  
  const routes = useRoutes(Routes)

  let navigateHandler = useNavigate()

  useEffect(() =>{
    if(localStorage.getItem('accessToken')){
      privateCall.get('user/validate')
      .then((r) => {
        console.log(r)
      })
      .catch(error => {
        console.error(error)
      })
    }
    else { 
      navigateHandler('/login')
    }
  }, [])
  // const randomVal = useSelector(state => state.randomValue)

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