import React, { useEffect } from 'react'
import LoginBox from '../../components/LoginBox'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { privateCall } from '../../api/axios'

export interface IProps {}

const Login:React.FC<IProps> = (props) => {
  let navigate = useNavigate()
  
  useEffect(()=> {
    if(localStorage.getItem('accessToken')) {
      privateCall.get('/user/validate')
      .then(({data}) => {
        if(data.status && data.message.toLowerCase() == 'authorized') {
          navigate('/')
        }
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <LoginBox/>
      <p>New Here? <span><Link to="/register" className="text-blue-700 hover:underline">Create an account Now</Link></span></p>
    </div>
  )
}

export default Login