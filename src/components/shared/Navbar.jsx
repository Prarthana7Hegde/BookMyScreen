import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        <Link to="/">MyWebsite</Link>
      </h1>

      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/movies" className="hover:text-blue-400">Movies</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
