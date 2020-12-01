import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

export type QueryResponse = {
  allContentfulProject: {
    edges: {
      node: {
        id: string;
        name: string;
        description: string;
        homepage: string;
        repository: string;
        publishedDate: string;
        type: string;
        logo: {
          // title: string;
          image: {
            src: string;
          };
        };
      };
    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { allContentfulProject } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      allContentfulProject {
        edges {
          node {
            id
            name
            description
            publishedDate(formatString: "YYYY")
            logo {
              image: resize(width: 200, quality: 100) {
                src
              }
            }
            type
            homepage: projectUrl
            repository: repositoryUrl
          }
        }
      }
    }
  `);

  return allContentfulProject.edges
    .filter((value) => value.node.name !== null)
    .map((value) => ({
      ...value.node,
      logo: {
        // alt: logo.title,
        src: value.node.logo.image ? value.node.logo.image.src : '',
      },
    }));
    
};
