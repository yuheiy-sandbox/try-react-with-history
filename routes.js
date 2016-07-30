import React from 'react'
import Home from './components/Page/home'
import AsyncPage from './components/Page/async-page'

const routes = [
  {
    path: '/',
    action: () => <Home />
  }, {
    path: '/async',
    action: async () => {
      const message = await new Promise(done => setTimeout(() => done('hello'), 3000))
      return message && <AsyncPage message={message} />
    }
  }
]

export default routes
