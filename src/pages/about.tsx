import React from 'react';
import { Box, Image, Flex, Link } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';
import { Background404 } from './404';
import Layout from '../components/Layout';

const AboutMain = () => {

  const { markdownMain } = useAboutMeQuery()

   
  return (
    <Layout>
      <Section.Container id="about_me_more" Background={Background404}>
        <Section.Header name="About me more" icon="👍" label="thumbs_up" />
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
            <Fade direction="down" triggerOnce>
              <ReactMarkdown
                source={markdownMain}
                renderers={markdownRenderer}
              />
            </Fade>
            <Link href='/'>
              トップページへ戻る👉
            </Link>
          </Box>
        </Flex>
      </Section.Container>
    </Layout>
  );
}

export default AboutMain