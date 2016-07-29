import {Component, PropTypes} from 'react'
import {EventEmitter} from 'events'

export default class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.emitter = new EventEmitter()
    this.dispatch = this.emitter.emit.bind(this.emitter)
  }

  componentWillUnmount() {
    this.emitter.removeAllListeners()
  }

  render() {
    const {children, ...props} = this.props;

    return children && React.cloneElement(
      children,
      Object.assign({}, props, this.state, {dispatch: this.dispatch})
    )
  }
}
