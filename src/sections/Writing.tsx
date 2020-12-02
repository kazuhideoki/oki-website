import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { useMediumQuery } from '../queries/useMediumQuery';
import { useGetQiitaArticles } from '../queries/qiita/useGetQiitaArticles';
import { Post } from '../components/Post';
import { MediumPost } from '../types';

type Props = { qiitaArticles?: MediumPost[], 
  title: string
  content: string
};

export default function Writing(props: Props) {
  console.log('Writingのpropsは ' + JSON.stringify(props));
  
  const { qiitaArticles } = props;
  // console.log('WritingのageContextは ' + pageContext);
  // const {qiitaArticles} = pageContext
  console.log('WritingのqiitaArticlesは ' + qiitaArticles);
  

  const { posts } = useMediumQuery();
  // const qiitaPosts = await useGetQiitaArticles()

  return (
    <>
      <Section.Container id="writing" Background={Background}>
        <Section.Header name="Writing" icon="✍️" label="writing" />
        <CardContainer minWidth="300px">
          <Fade direction="down" triggerOnce cascade damping={0.5}>
            {posts.map((p) => (
              <Post {...p} key={p.url} />
            ))}
          </Fade>
        </CardContainer>
      </Section.Container>
      {props.title}
      {/* <Section.Container id="qiita" Background={Background}>
        <Section.Header name="qiita" icon="✍️" label="qiita" />
        <CardContainer minWidth="300px">
          <Fade direction="down" triggerOnce cascade damping={0.5}>
            {qiitaArticles.map((p) => (
              <Post {...p} key={p.url} />
            ))}
          </Fade>
        </CardContainer>
      </Section.Container> */}
    </>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);


