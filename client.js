import 'babel-polyfill'
import {render} from 'react-dom'
import history from './history'
import router from './router'
import routes from './routes'

const mountNode = document.getElementById('root')

const renderApp = component => render(component, mountNode)

const mount = location => {
  // console.log(location);
  router.resolve(routes, location)
    .then(renderApp)
    .catch(error => router.resolve(routes, {...location, error}))
    .then(renderApp)
}

// const mount = location => router.resolve(routes, location)
//   .then(renderApp)
//   .catch(error => router.resolve(routes, {...location, error}))
//   .then(renderApp)

mount(history.getCurrentLocation())
history.listen(mount)
