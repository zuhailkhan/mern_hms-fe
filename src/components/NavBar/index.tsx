import React from 'react'
import { Link } from 'react-router-dom'

export interface IProps { }

const NavBar: React.FC<IProps> = (props) => {
    return (
        <div className="bg-slate-900 h-[3rem] flex text-white justify-between items-center pl-5 hover:bg-slate-800">
            <div>
                Hostel Manager
            </div>
            <div className="flex gap-6 items-center pr-5">
                <div>
                    <Link to="/" >Home</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar