import { graphql, useStaticQuery } from 'gatsby';
import { AboutMe } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    aboutMe: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    aboutMeMain: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    profile: {
      title: string;
      image: {
        src: string;
      };
    };
  };
};

export const useAboutMeQuery = (): AboutMe => {
  const {
    contentfulAbout: { aboutMe, aboutMeMain, profile },
  } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery {
      contentfulAbout {
        aboutMe {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        profile {
          image: resize(width: 450, quality: 100) {
            src
          }
        }
        aboutMeMain {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return {
    markdown: aboutMe.childMarkdownRemark.rawMarkdownBody,
    markdownMain: aboutMeMain.childMarkdownRemark.rawMarkdownBody,
    profile: {
      // alt: profile.title,
      src: profile.image.src,
    },
  };
};
