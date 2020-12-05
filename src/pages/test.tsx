import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { Background404} from './404'

export default () => {
  return (
    <Layout>
      <Section.Container id="404" Background={Background404}>

      <h1>testだよ</h1>
      </Section.Container>

    </Layout>
  )
}