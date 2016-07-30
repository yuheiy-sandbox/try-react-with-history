import React from 'react'
import Layout from '../UI/layout'

export default class AsyncPage extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <Layout>
        <div>{this.props.message}</div>
      </Layout>
    )
  }
}
