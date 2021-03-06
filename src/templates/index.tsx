import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing, { TWriting } from '../sections/Writing';
import Footer from '../components/Footer';
import { MediumPost } from '../types';

type Props = {
  pageContext: TWriting;
};

function IndexPage(props: Props) {
  return (
    <Layout>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Writing {...props.pageContext} />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
