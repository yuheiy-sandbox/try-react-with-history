import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import history from './history'
import router from './router'
import routes from './routes'
import RootContainer from './components/Page/root-container'

const mountNode = document.getElementById('root')

const renderApp = component => {
  render(<RootContainer>{component}</RootContainer>, mountNode)
}


const mount = location => {
  // console.log(location);
  router.resolve(routes, location)
    .then(renderApp)
    .catch(error => router.resolve(routes, {...location, error})
      .then(renderApp)
    )
}

// const mount = location => router.resolve(routes, location)
//   .then(renderApp)
//   .catch(error => router.resolve(routes, {...location, error}))
//   .then(renderApp)

mount(history.getCurrentLocation())
history.listen(mount)
history.listenBefore((location,cb) => {
  console.log(location);

  setTimeout(() => {
    console.log('listen before');
    cb()
  }, 1000)

})
