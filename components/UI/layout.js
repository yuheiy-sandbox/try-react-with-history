import React from 'react'

const Header = () => (
  <header>
    <h1>Document title</h1>
  </header>
)

const Layout = ({children, ...props}) => (
  <div>
    <Header />
    {children && React.cloneElement(children, {...props})}
  </div>
)

export default Layout
