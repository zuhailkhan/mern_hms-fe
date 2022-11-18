import React from 'react'
import LoginBox from '../../components/LoginBox'

export interface IProps {}

const Login:React.FC<IProps> = (props) => {
  return (
    <div className="flex justify-center h-screen items-center">
      <LoginBox/>
    </div>
  )
}

export default Login