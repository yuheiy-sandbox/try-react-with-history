import Home from './components/Page/home'

const routes = [
  {
    path: '/',
    action: () => <Home />
  }, {
    path: '/async',
    action: async () => {
      const data = await new Promise(done => setTimeout(done('hello')))
      return data && <Home {...data} />
    }
  }
]

export default routes
