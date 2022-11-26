import React, { FormEvent, useState } from 'react'
import axios from '../../api/axios'
import {useNavigate} from 'react-router'

export interface IProps { }

const App: React.FC<IProps> = (props) => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  let navigateHandler = useNavigate()

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()
    if(!username || !password) {
      alert('Please enter username and password')
      return
    }
    axios.post('user/login', {username, password})
      .then(({data}) => {
        localStorage.setItem('accessToken', data.token)
        navigateHandler('/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-md rounded p-8 mb-4" onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-1">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username" 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md leading-tight"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-1">Password</label>
          <input 
            type="password"  
            name="password" 
            placeholder="Enter your Password" 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-md leading-tight"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-3 text-white font-semibold">
            Sign In
          </button>
          <a href="" className="text-blue-500 font-bold">Forgot Password</a>
        </div>
      </form>
    </div>
  )
}

export default App
