import React from 'react'
import LoginBox from '../../components/LoginBox'

export interface IProps {}

const Login:React.FC<IProps> = (props) => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <LoginBox/>
    </div>
  )
}

export default Login