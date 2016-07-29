import React from 'react'
import Layout from '../UI/Layout'

export default class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div>home</div>
      </Layout>
    )
  }
}
