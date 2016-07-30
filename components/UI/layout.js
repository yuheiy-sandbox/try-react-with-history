import React from 'react'
import Link from './link'

const Header = () => (
  <header>
    <h1>Document title</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/async">async</Link></li>
      <li><Link to="/hoge">hoge</Link></li>
    </ul>
  </header>
)

const Layout = ({children}) => (
  <div>
    <Header />
    {children && React.cloneElement(children)}
  </div>
)

export default Layout
