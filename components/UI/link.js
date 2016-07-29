import React from 'react'
import history from '../../history'

export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(ev) {
    if (this.props.onClick) {
      this.props.onClick(ev)
    }

    ev.preventDefault()

    if (this.props.to) {
      history.push(this.props.to)
    } else {
      history.push({
        pathname: ev.currentTarget.pathname,
        search: ev.currentTarget.search
      })
    }
  }

  render() {
    const {to, ...props} = this.props
    return <a href={history.createHref(to)} {...props} onClick={this.onClick} />
  }
}
