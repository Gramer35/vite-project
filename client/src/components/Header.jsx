import React from "react";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Chris Gramer</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link className='font-mono' to='/AboutMe' element={<AboutMe />} >About Me</Link>
                    <Link className='font-mono' to='/Contact' element={<Contact />} >Contact</Link>
                    <Link className='font-mono' to='/Portfolio' element={<Portfolio />}>Portfolio</Link>
                    <Link className='font-mono' to='/Resume' element={<Resume />} >Resume</Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;