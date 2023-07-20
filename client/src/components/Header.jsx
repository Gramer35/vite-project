import React from "react";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Chris Gramer</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal ">
                    <li><Link className='font-mono' to='/AboutMe' >About Me</Link></li>
                    <li><Link className='font-mono' to='/Contact'  >Contact</Link></li>
                    <li><Link className='font-mono' to='/Portfolio' >Portfolio</Link></li>
                    <li><Link className='font-mono' to='/Resume' >Resume</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;